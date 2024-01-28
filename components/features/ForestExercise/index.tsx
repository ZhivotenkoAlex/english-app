'use client'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import ProgressTimer from '../ProgressTimer'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import { colors } from '@/utils/colors'

enum AnswerStatus {
  PENDING = 'pending',
  WRONG = 'wrong',
  SUCCESS = 'success',
}

const ContainerColors = {
  [AnswerStatus.PENDING]: colors.lightGreen,
  [AnswerStatus.SUCCESS]: colors.green,
  [AnswerStatus.WRONG]: colors.lightWarning,
}

export default function ForestExercise({ forestData, handleProgress, handleWrongWords }: any) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(forestData[activeIndex])
  const [answer, setAnswer] = useState('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>(AnswerStatus.PENDING)
  const [errorCount, setErrorCount] = useState(0)

  useEffect(() => {
    setActiveWord(forestData[activeIndex])
  }, [activeIndex, forestData])

  const handleChangeWord = () => {
    setActiveIndex(prev => prev + 1)
    setAnswerStatus(AnswerStatus.PENDING)
    setAnswer('')
  }
  const handleFinish = () => handleProgress(true)

  const handleNoAnswer = () => {
    if (!answer) {
      handleWrongWords(activeWord)
    }
  }

  const handleChipClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement

    if (answer !== '') {
      return
    }

    textContent && setAnswer(textContent)

    if (textContent !== activeWord.translation) {
      setAnswerStatus(AnswerStatus.WRONG)
      handleWrongWords(activeWord)
      setErrorCount(prev => prev + 1)
    } else {
      setAnswerStatus(AnswerStatus.SUCCESS)
    }
  }

  return (
    <Root>
      <ProgressTimer
        rounds={forestData.length}
        handleChangeWord={handleChangeWord}
        handleFinish={handleFinish}
        handleNoAnswer={handleNoAnswer}
      />
      <WordContainer $hasError={answerStatus}>
        <Word>{activeWord.title}</Word>
        <Word>{errorCount}</Word>
      </WordContainer>
      <ChipContainer>
        {activeWord.variants.map(item => (
          <StyledChip
            $isActive={answer === item.answerText}
            key={item.id}
            label={item.answerText}
            onClick={handleChipClick}
          />
        ))}
      </ChipContainer>
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
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

const StyledChip = styled(Chip)<{ $isActive: boolean }>`
  && {
    font-size: 20px;
    background-color: ${props => (props.$isActive === true ? colors.green : colors.lightGreen)};
    padding: 20px;
  }
  &:hover {
    background-color: ${colors.green};
  }
`

const ChipContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px auto;
  padding: 25px;
  background: ${colors.lightBlue};
  width: fit-content;
  border-radius: 16px;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`
