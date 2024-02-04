'use client'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import { COLORS_ENUM, colors } from '@/utils/colors'
import { AnswerStatus, ContainerColors, ITranslationVariants, ITranslationWord } from '@/types'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import HintIcon from '@/components/atoms/HintIcon'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import Button from '@/components/molecules/Button/Button'

type PropTypes = {
  data: ITranslationWord[]
  handleFinish: (arg: boolean) => void
  handleWrongWords: (arg: ITranslationWord) => void
}

export default function TranslationWordExercise({
  data,
  handleFinish,
  handleWrongWords,
}: PropTypes) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeWord, setActiveWord] = useState(data[activeIndex])
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>(AnswerStatus.PENDING)
  const isChecked = answerStatus !== AnswerStatus.PENDING
  const counterLabel = `${activeIndex + 1} / ${data.length}`
  const isDone = activeIndex + 1 === data.length

  useEffect(() => {
    setActiveWord(data[activeIndex])
  }, [activeIndex, data])

  const isChipActive = (item: ITranslationVariants) => {
    if (isChecked) {
      return item.title === activeWord.title
    }
    return false
  }

  const isChipDisabled = (item: ITranslationVariants) => isChecked && !isChipActive(item)

  const handleNextWord = () => {
    setActiveIndex(prev => prev + 1)
    setAnswerStatus(AnswerStatus.PENDING)
  }
  const handleFinishButton = () => handleFinish(true)

  const handleNoAnswer = () => {
    setAnswerStatus(AnswerStatus.FAIL)
    handleWrongWords(activeWord)
    getVoice(activeWord?.title)
  }

  const handleChipClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLButtonElement

    if (textContent !== activeWord.title) {
      setAnswerStatus(AnswerStatus.FAIL)
      handleWrongWords(activeWord)
    } else {
      setAnswerStatus(AnswerStatus.SUCCESS)
    }
    getVoice(activeWord?.title)
  }

  const iconClickHandler = () => getVoice(activeWord?.title)

  return data.length ? (
    <Root>
      <TaskContainer>
        <PencilLineIcon color={colors.grey} />
        <Task>Choose the correct</Task>
      </TaskContainer>
      <Counter label={counterLabel} $isDone={false} />
      <ContentContainer>
        <Container>
          <IconContainer>
            {isChecked && <VolumeAction size={30} onClick={iconClickHandler} />}
          </IconContainer>
          <WordContainer $hasError={answerStatus}>
            <Word>{activeWord?.translation}</Word>
          </WordContainer>

          {isChecked && <Transcription>{activeWord.transcription}</Transcription>}
        </Container>
        <ChipContainer>
          {activeWord?.variants.map(item => (
            <StyledChip
              disabled={isChipDisabled(item)}
              $isActive={isChipActive(item)}
              key={item.id}
              label={item.title}
              onClick={handleChipClick}
            />
          ))}
          {isChecked &&
            (isDone ? (
              <StyledButton label={'FINISH'} onClick={handleFinishButton} />
            ) : (
              <StyledButton
                label="NEXT"
                color={COLORS_ENUM.GREEN}
                onClick={handleNextWord}
                size="medium"
                disabled={false}
              />
            ))}

          {!isChecked && (
            <IconContainer onClick={handleNoAnswer}>
              <HintIcon Icon={QuestionLineIcon} isComplete={true} />
            </IconContainer>
          )}
        </ChipContainer>
      </ContentContainer>
    </Root>
  ) : (
    <Loader>...Loading</Loader>
  )
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  width: 50%;
  position: relative;
  border: 1px solid ${colors.green};
  padding: 24px;
  border-radius: 16px;
  background: #f6ffff;

  @media screen and (max-width: 1439px) {
    width: 60%;
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
    align-items: flex-start;
  }
`

const Container = styled.div`
  width: 50%;
  display: grid;
  justify-content: center;
`

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
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
  text-align: center;
`

const Transcription = styled.span`
  text-align: center;
  display: inline-block;
  color: ${colors.grey};
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
    scale: 1.05;
  }
`

const ChipContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
  background: ${colors.lightBlue};
  min-width: 50%;
  border-radius: 16px;
  flex-wrap: wrap;
  grid-template-columns: 1fr;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media screen and (max-width: 1023px) {
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
    padding: 0 2rem;
    justify-content: flex-start;
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
  margin: 0 auto;
  cursor: pointer;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  width: fit-content;
`
