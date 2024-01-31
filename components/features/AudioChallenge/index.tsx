'use client'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import { COLORS_ENUM, colors } from '@/utils/colors'
import { AnswerStatus, ContainerColors, IForestItem, IForestVariant } from '@/types'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import HintIcon from '@/components/atoms/HintIcon'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import Button from '@/components/molecules/Button/Button'

type PropTypes = {
  forestData: IForestItem[]
  handleProgress: (arg: boolean) => void
  handleWrongWords: (arg: IForestItem) => void
}

export default function AudioChallenge({
  forestData,
  handleProgress,
  handleWrongWords,
}: PropTypes) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(forestData[activeIndex])
  const [answer, setAnswer] = useState('')
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>(AnswerStatus.PENDING)
  const isChecked = answerStatus !== AnswerStatus.PENDING
  const counterLabel = `${activeIndex + 1} / ${forestData.length}`
  const isDone = activeIndex + 1 === forestData.length

  useEffect(() => {
    setActiveWord(forestData[activeIndex])
  }, [activeIndex, forestData])

  useEffect(() => {
    getVoice(activeWord?.title)
  }, [activeWord])

  const handleChangeWord = () => {
    setActiveIndex(prev => prev + 1)
    setAnswerStatus(AnswerStatus.PENDING)
    setAnswer('')
  }
  const handleFinish = () => handleProgress(true)

  const handleNoAnswer = () => {
    if (!answer) {
      setAnswerStatus(AnswerStatus.FAIL)
      handleWrongWords(activeWord)
      getVoice(activeWord?.title)
    }
  }

  const handleChipClick = (e: SyntheticEvent) => {
    if (answer !== '') {
      return
    }
    const { textContent } = e.target as HTMLButtonElement
    textContent && setAnswer(textContent)

    if (textContent !== activeWord.translation) {
      setAnswerStatus(AnswerStatus.FAIL)
      handleWrongWords(activeWord)
    } else {
      setAnswerStatus(AnswerStatus.SUCCESS)
    }
    getVoice(activeWord?.title)
  }

  const isChipActive = (item: IForestVariant) => {
    if (isChecked) {
      return item.answerText === activeWord.translation
    }
    return false
  }

  const isChipDisabled = (item: IForestVariant) => isChecked && !isChipActive(item)

  return (
    <Root>
      <TaskContainer>
        <PencilLineIcon color={colors.grey} />
        <Task>Choose the correct</Task>
      </TaskContainer>
      <Counter label={counterLabel} $isDone={false} />
      <VolumeAction size={50} onClick={() => getVoice(activeWord?.title, 0.3)} />

      <ChipContainer>
        {activeWord.variants.map(item => (
          <StyledChip
            disabled={isChipDisabled(item)}
            $isActive={isChipActive(item)}
            key={item.id}
            label={item.answerText}
            onClick={handleChipClick}
          />
        ))}
      </ChipContainer>
      {isChecked ? (
        <>
          <WordContainer $hasError={answerStatus}>
            <Word>{activeWord.title}</Word>
          </WordContainer>
        </>
      ) : (
        <IconContainer onClick={handleNoAnswer}>
          <HintIcon Icon={QuestionLineIcon} isComplete={true} />
        </IconContainer>
      )}
      {!isDone && isChecked && (
        <StyledButton
          label="NEXT"
          color={COLORS_ENUM.GREEN}
          onClick={handleChangeWord}
          size="medium"
          disabled={false}
        ></StyledButton>
      )}
      {isDone && <StyledButton label={'FINISH'} onClick={handleFinish}></StyledButton>}
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
    background-color: ${({ $isActive }) => ($isActive ? colors.green : colors.lightGreen)};
    padding: 20px;
    transition: all 0.5s ease-in-out;
    scale: ${({ $isActive }) => ($isActive ? 1.1 : 1)};
  }
  &&:hover {
    background-color: ${colors.green};
    scale: 1.1;
  }
`

const ChipContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 50px auto 20px auto;
  padding: 25px;
  background: ${colors.lightBlue};
  min-width: 100%;
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
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`
const VolumeAction = styled(VolumeUpFillIcon)`
  fill: ${colors.successGreen};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    fill: ${colors.blue};
  }
`

const IconContainer = styled.div`
  display: flex;
  width: 50px;
  justify-content: center;
  margin: 20px auto;
  cursor: pointer;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: fit-content;
`
