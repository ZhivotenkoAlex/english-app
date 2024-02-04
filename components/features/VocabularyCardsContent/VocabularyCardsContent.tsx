import Heading from '@/components/atoms/Heading/Heading'
import Button from '@/components/molecules/Button/Button'
import { themeColors } from '@/lib/theme'
import { AnswerStatus, ContainerColors, IWord } from '@/types'
import { COLORS_ENUM } from '@/utils/colors'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import EmptyImage from '../../../public/images/emptyWordImage.png'
import { getVoice } from '@/helpers/getVoice'
interface IVocabularyCardsContent {
  words: IWord[]
  isPronunciation: boolean
  currentWord: IWord
  handleAddWrongWords: (word: IWord) => void
  setIsFinished: (val: boolean) => void
  setActiveIndex: (callback: (prev: number) => number) => void
  activeIndex: number
}
function VocabularyCardsContent({
  currentWord,
  activeIndex,
  isPronunciation,
  handleAddWrongWords,
  setActiveIndex,
  setIsFinished,
  words,
}: IVocabularyCardsContent) {
  const [isWordShown, setIsWordShown] = useState(false)
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.PENDING)
  const [isNotKnownState, setIsNotKnownState] = useState(false)
  const [isKnownState, setIsKnownState] = useState(false)

  const handleToRepetition = () => {
    setIsWordShown(true)
    setAnswerStatus(AnswerStatus.FAIL)
    setIsNotKnownState(true)
    handleAddWrongWords(currentWord)
    handlePronunciate()
  }

  const handleKnowWord = () => {
    setIsWordShown(true)
    setIsKnownState(true)
    setAnswerStatus(AnswerStatus.SUCCESS)
    handlePronunciate()
  }

  const handleContinue = () => {
    if (activeIndex === words.length - 1) {
      setIsFinished(true)
      return
    }
    setActiveIndex(prev => prev + 1)
    setIsWordShown(false)
    setIsNotKnownState(false)
    setIsKnownState(false)
    setAnswerStatus(AnswerStatus.PENDING)
  }

  const handlePronunciate = () => {
    if (isPronunciation) {
      getVoice(currentWord.title, 0.8)
    }
  }
  const renderButtons = useCallback(() => {
    if (isNotKnownState) {
      return (
        <Button label="Continue" color={COLORS_ENUM.GREEN} size="large" onClick={handleContinue} />
      )
    }
    if (isKnownState) {
      return (
        <>
          <Button
            size="large"
            label="To repetition"
            color={COLORS_ENUM.GREY}
            fontColor={COLORS_ENUM.DARK_GREY}
            onClick={handleToRepetition}
          />
          <Button
            label="Continue"
            color={COLORS_ENUM.GREEN}
            size="large"
            onClick={handleContinue}
          />
        </>
      )
    }

    return (
      <>
        <Button
          size="large"
          label="I don't know"
          color={COLORS_ENUM.GREY}
          fontColor={COLORS_ENUM.DARK_GREY}
          onClick={handleToRepetition}
        />
        <Button label="I know" color={COLORS_ENUM.GREEN} size="large" onClick={handleKnowWord} />
      </>
    )
  }, [isKnownState, isNotKnownState])
  return (
    <Wrapper>
      {isWordShown ? (
        <Image src={currentWord.picture} alt={currentWord.title} width={100} height={100} />
      ) : (
        <Image src={EmptyImage} alt={'empty image'} width={100} height={100} />
      )}
      <WordContainer $hasError={answerStatus}>
        <Word>{currentWord.title}</Word>
      </WordContainer>
      {isWordShown && <Heading color={COLORS_ENUM.GREY} title={currentWord.translation} />}{' '}
      <ButtonsWrapper>{renderButtons()}</ButtonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid ${themeColors.gray};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 500px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const WordContainer = styled.div<{ $hasError: AnswerStatus }>`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 25px;
  background: ${props => ContainerColors[props.$hasError]};

  width: fit-content;
  border-radius: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const Word = styled.span`
  font-size: 20px;
  text-transform: uppercase;
`
export default VocabularyCardsContent
