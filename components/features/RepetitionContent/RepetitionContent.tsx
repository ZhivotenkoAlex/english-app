import { themeColors } from '@/lib/theme'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import { colors } from '@/utils/colors'
import ProgressTimer from '../ProgressTimer'
import { AnswerStatus, ContainerColors, IWord } from '@/types'
import { shuffleArray } from '@/helpers/shuffleArray'
import { getRandomElement } from '@/helpers/getRandomElement'

interface IRepetitionContent {
  words: IWord[]
  currentWord: IWord
  handleAddWrongWords: (word: IWord) => void
  setIsFinished: (val: boolean) => void
  setActiveIndex: (callback: (prev: number) => number) => void
}
function RepetitionContent({
  words,
  currentWord,
  handleAddWrongWords,
  setIsFinished,
  setActiveIndex,
}: IRepetitionContent) {
  const [isSelected, setIsSelected] = useState(false)
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>(AnswerStatus.PENDING)

  const variants = useMemo(() => {
    const randomElem = getRandomElement(words.filter(word => word.id !== currentWord.id))
    return shuffleArray([randomElem, currentWord])
  }, [words, currentWord])

  const isDisabled = useMemo(() => answerStatus !== AnswerStatus.PENDING, [answerStatus])

  const handleChangeWord = () => {
    setAnswerStatus(AnswerStatus.PENDING)
    setActiveIndex(prev => prev + 1)
    setIsSelected(false)
  }

  const handleFinish = () => {
    setIsFinished(true)
  }

  const handleNoAnswer = () => {
    if (!isSelected) {
      handleAddWrongWords(currentWord)
    }
  }

  const handleChipClick = (selectedVariant: IWord) => {
    setIsSelected(true)
    if (selectedVariant.translation !== currentWord.translation) {
      setAnswerStatus(AnswerStatus.FAIL)
      handleAddWrongWords(currentWord)
    } else {
      setAnswerStatus(AnswerStatus.SUCCESS)
    }
  }

  return (
    <Wrapper>
      <ProgressTimer
        rounds={words.length}
        handleChangeWord={handleChangeWord}
        handleFinish={handleFinish}
        handleNoAnswer={handleNoAnswer}
      />
      <WordContainer $hasError={answerStatus}>
        <Word>{currentWord.title}</Word>
      </WordContainer>
      <ChipContainer>
        {variants.map(variant => (
          <StyledChip
            $isActive
            disabled={isDisabled}
            key={variant?.id}
            label={variant?.translation}
            onClick={() => handleChipClick(variant!)}
          />
        ))}
      </ChipContainer>
    </Wrapper>
  )
}

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
const StyledChip = styled(Chip)<{ $isActive: boolean }>`
  && {
    font-size: 20px;
    background-color: ${props => (props.$isActive ? colors.green : colors.lightGreen)};
    padding: 20px;
  }
  &&:hover {
    background-color: ${colors.green};
  }
`

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px auto;
  padding: 25px;
  background: ${colors.lightBlue};
  min-width: 100%;
  border-radius: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Wrapper = styled.div`
  border: 2px solid ${themeColors.gray};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export default RepetitionContent
