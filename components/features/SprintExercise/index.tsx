'use client'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import { colors } from '@/utils/colors'
import { IForestItem as ISprintItem } from '@/types'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'
import SprintTimer from '../SprintTimer'
import { useMediaQuery } from '@mui/material'

type PropTypes = {
  sprintData: ISprintItem[]
  handleProgress: (arg: boolean) => void
  handleLearnedWords: (arg: ISprintItem) => void
}

export default function SprintExercise({
  sprintData,
  handleProgress,
  handleLearnedWords,
}: PropTypes) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(sprintData[activeIndex])
  const variant = activeWord.variants[0]
  const isVariantCorrect = variant.answerText === activeWord.translation
  const isVariantsOver = activeIndex + 1 === sprintData.length
  const counterLabel = `${activeIndex + 1} / ${sprintData.length}`
  const isMobileView = useMediaQuery('(max-width:739px)')
  const timerSize = isMobileView ? 'mobile' : 'small'

  useEffect(() => {
    setActiveWord(sprintData[activeIndex])
  }, [activeIndex, sprintData])

  const handleFinish = () => handleProgress(true)

  const handleChipClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement
    const isClickOnCorrect = textContent === 'Correct'

    if (isVariantsOver) {
      handleFinish()
    }
    if ((isVariantCorrect && isClickOnCorrect) || (!isVariantCorrect && !isClickOnCorrect)) {
      setActiveIndex(prev => prev + 1)
      handleLearnedWords(activeWord)
    } else {
      setActiveIndex(prev => prev + 1)
    }
  }

  return (
    <Root>
      <TimerContainer>
        <SprintTimer rounds={1} size={timerSize} handleFinish={handleFinish} />
      </TimerContainer>
      <TaskContainer>
        <PencilLineIcon color={colors.grey} />
        <Task>Is the correct?</Task>
      </TaskContainer>

      <Counter label={counterLabel} $isDone={false} />
      <WordContainer>
        <Word>{activeWord.title}</Word>
        <Translation>{variant.answerText}</Translation>
      </WordContainer>

      <ChipContainer>
        <StyledChip $isWrong={true} label={'Wrong'} onClick={handleChipClick} />
        <StyledChip $isWrong={false} label={'Correct'} onClick={handleChipClick} />
      </ChipContainer>
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
  flex-direction: column;
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

const Word = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.darkGrey};
`

const Translation = styled.span`
  font-size: 18px;
  color: ${colors.darkGrey};
  text-transform: uppercase;
`
const StyledChip = styled(Chip)<{ $isWrong: boolean }>`
  && {
    font-size: 20px;
    background-color: ${props => (props.$isWrong ? colors.lightWarning : colors.lightGreen)};
    padding: 20px;
  }
  &&:hover {
    background-color: ${props => (props.$isWrong ? colors.lightWarning2 : colors.green)};
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
  border-radius: 16px;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
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

const Counter = styled(Chip)<{ $isDone: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${props => (props.$isDone ? colors.green : 'white')};
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Task = styled.p`
  font-weight: 600;
  color: ${colors.grey};
  letter-spacing: 0.4px;
`

const TaskContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`

const TimerContainer = styled.div`
  position: absolute;
  top: -60px;
  left: 20px;
`
