'use client'
import { COLORS_ENUM, colors } from '@/utils/colors'
import Chip from '@mui/material/Chip'
import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import DeleteBackIcon from 'remixicon-react/DeleteBack2LineIcon'
import Button from '@/components/molecules/Button/Button'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import CheckIcon from 'remixicon-react/ShieldCheckFillIcon'
import { getVoice } from '@/helpers/getVoice'

export default function GrammarTensePage({ data, handleFinish, handleWrongWords }) {
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(data[activeWordIndex])
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [activeItem, setActiveItem] = useState(activeWord.items[0])
  const [answer, setAnswer] = useState<any>([])
  const getAnswer = useMemo(() => answer.join(' '), [answer])

  const notPunctuationItems = activeWord.items.filter(item => !item.isPunctuation)
  const punctuationItem = activeWord.items.find(item => item.isPunctuation)
  const isAnswerCorrect = answer.join(' ') === activeWord.title
  const isAnswerComplete = notPunctuationItems.length === answer.length
  const isLastWord = activeWordIndex + 1 === data.length
  const isDeleteButtonDisplayed = answer.length > 0 && !isAnswerComplete

  useEffect(() => {
    setActiveItem(activeWord.items[activeItemIndex])
    setActiveWord(data[activeWordIndex])
  }, [activeItemIndex, activeWord.items, activeWordIndex, data])

  useEffect(() => {
    if (isAnswerCorrect) {
      setTimeout(() => {
        isLastWord ? handleFinish() : handleNext()
      }, 3000)
    } else if (!isAnswerCorrect && isAnswerComplete) {
      handleWrongWords(activeWord)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWord.title, activeWordIndex, answer, isAnswerCorrect])

  useEffect(() => {
    isAnswerComplete && getVoice(activeWord.title, 0.5)
  }, [activeWord.title, isAnswerComplete])

  const handleChipClick = (e: SyntheticEvent) => {
    let { textContent } = e.target as HTMLButtonElement
    const isLastItem = answer.length + 1 === notPunctuationItems.length
    if (isLastItem) {
      textContent = `${textContent}${punctuationItem.title}`
    }
    setAnswer(prev => [...prev, textContent])
    setActiveItemIndex(prev => prev + 1)
  }

  const handleDelete = () => {
    const newAnswer = [...answer]
    newAnswer.splice(-1)
    setAnswer(newAnswer)
    setActiveItemIndex(prev => prev - 1)
  }

  function handleNext() {
    setAnswer([])
    setActiveItemIndex(0)
    setActiveWordIndex(prev => prev + 1)
  }

  const handleTryAgain = () => {
    setAnswer([])
    setActiveItemIndex(0)
  }

  return (
    <Root>
      <WordContainer>
        <Word>{activeWord.translation}</Word>
      </WordContainer>
      <AnswerContainer>
        <Answer $hasError={isAnswerComplete && !isAnswerCorrect}>{getAnswer}</Answer>
        {isDeleteButtonDisplayed && <DeleteBackIcon onClick={handleDelete} />}
      </AnswerContainer>
      <ChipContainer>
        {activeItem?.variants?.map(word => (
          <StyledChip key={word} label={word} onClick={handleChipClick} />
        ))}
      </ChipContainer>
      {isAnswerComplete && (
        <DescriptionContainer>
          {isAnswerCorrect ? (
            <div>
              <CheckIcon size={70} color={COLORS_ENUM.GREEN} />
            </div>
          ) : (
            <ErrorContainer>
              <WordContainer>
                <VolumeAction size={50} onClick={() => getVoice(activeWord.title, 0.3)} />
                <Hint>{activeWord.title}</Hint>
              </WordContainer>
              <Button
                label="TRY AGAIN"
                color={COLORS_ENUM.GREEN}
                variant="contained"
                size="large"
                onClick={handleTryAgain}
              />
            </ErrorContainer>
          )}
        </DescriptionContainer>
      )}
    </Root>
  )
}

const Root = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  width: 70%;
  position: relative;
  border: 1px solid ${colors.green};
  padding: 24px;
  border-radius: 16px;
  background: #f6ffff;

  @media screen and (max-width: 1439px) {
    width: 95%;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    min-width: 100%;
    border: none;
    padding: 0;
    border-radius: 16px;
  }
`

const WordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 25px;
  background: ${colors.lightGreen};
  width: fit-content;
  border-radius: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 25px;
  width: fit-content;
  border-radius: 16px;
  height: 1rem;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const Word = styled.span`
  font-size: 20px;
  text-transform: uppercase;
`

const Answer = styled.span<{ $hasError: boolean }>`
  font-size: 32px;
  text-transform: uppercase;
  color: ${({ $hasError }) => ($hasError ? colors.lightWarning2 : colors.darkGrey)};
  text-decoration: ${({ $hasError }) => ($hasError ? 'line-through' : 'none')};
  text-decoration-thickness: 2px;
`

const StyledChip = styled(Chip)`
  && {
    font-size: 20px;
    background-color: ${colors.lightGreen};
    padding: 20px;
    transition: all 0.5s ease-in-out;
  }
  &&:hover {
    background-color: ${colors.green};
    scale: 1.05;
  }
`

const Hint = styled.p`
  font-size: 32px;
`

const ChipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`

const DescriptionContainer = styled.div``

const ErrorContainer = styled.div`
  display: grid;
`
const VolumeAction = styled(VolumeUpFillIcon)`
  fill: ${colors.successGreen};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    fill: ${colors.blue};

    scale: 1.05;
  }
`
