'use client'
import { colors } from '@/utils/colors'
import React, { useCallback, useState } from 'react'
import { Chip } from '@mui/material'
import styled from 'styled-components'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import Button from '@/components/__molecules__/Button/Button'
import { Form, Field, FieldInputProps } from 'react-final-form'
import InputItemType from './InputItemType'
import SelectOneItemType from './SelectOneItemType'
import CorrectItemType from './CorrectItemType'
import ConstructItemType from './ConstructItemType'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import HintIcon from '@/components/__atoms__/HintIcon'
import { PracticeTasks } from '@/helpers/constants'
import PencilLineIcon from 'remixicon-react/PencilRulerLineIcon'

interface InitialValue {
  answer: string
}

const getExercises = (
  type: string,
  activeItem,
  input: FieldInputProps<string, HTMLElement>,
  isChecked: boolean,
  isValidated: boolean | null,
) => {
  const exercises = {
    input: (
      <InputItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    select_one: (
      <SelectOneItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    correct: (
      <CorrectItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    construct: (
      <ConstructItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
  }
  return exercises[type]
}

export default function PracticeItem({ practice, clickHandler }: any) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeItem, setActiveItem] = useState(practice[activeIndex])
  const [isChecked, setIsChecked] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [isValidated, setIsValidated] = useState(null)

  const initialValues = activeItem.type === 'correct' ? { answer: activeItem.missed } : {}

  const onSubmit = useCallback(
    (data: InitialValue, form: any) => {
      const correctVariant = activeItem.correctVariant.split('/')

      const answer =
        activeItem.type === 'correct' || activeItem.type === 'construct'
          ? data.answer
          : data.answer?.toLowerCase()

      const isCorrect =
        activeItem.type === 'construct' ? answer === activeItem.en : correctVariant.includes(answer)
      setIsValidated(isCorrect)
      setIsChecked(isCorrect)

      const isLastItem = typeof practice[activeIndex + 1] === 'undefined'

      if (isCorrect && isLastItem) {
        setIsDone(true)
      }

      if (isChecked && isCorrect && !isDone) {
        setActiveIndex(activeIndex + 1)
        setActiveItem(practice[activeIndex + 1])
        setIsChecked(false)
        form.change('answer', '')
        setIsValidated(null)
      }
    },
    [
      activeIndex,
      activeItem.correctVariant,
      activeItem.en,
      activeItem.type,
      isChecked,
      isDone,
      practice,
    ],
  )

  const handleNextExercise = () => clickHandler(3)

  const counterLabel = `${activeIndex + 1} / ${practice.length}`

  return (
    <Root>
      <WordContainer>
        {!isChecked && (
          <TaskContainer>
            <PencilLineIcon color={colors.grey} />
            <Task>{PracticeTasks[activeItem.type]}</Task>
          </TaskContainer>
        )}
        <Counter label={counterLabel} $isDone={isDone} />
      </WordContainer>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            {isChecked ? (
              <TranslationContainer $isChecked={isChecked}>
                <Word>{isChecked ? activeItem.en : ' '}</Word>
                {isChecked ? (
                  <VolumeAction onClick={() => getVoice(activeItem?.en, 'en', 0.7)} />
                ) : null}
              </TranslationContainer>
            ) : (
              <Field
                name="answer"
                render={({ input }) => {
                  return getExercises(activeItem.type, activeItem, input, isChecked, isValidated)
                }}
              />
            )}
            {!isDone && (
              <IconContainer onClick={() => form.change('answer', activeItem.hint)}>
                <HintIcon Icon={QuestionLineIcon} isComplete={!isChecked} />
              </IconContainer>
            )}
            {isDone ? (
              <>
                <StyledButton label={'FINISH'} onClick={handleNextExercise}></StyledButton>
              </>
            ) : (
              <ButtonContainer>
                <StyledButton label={isChecked ? 'NEXT' : 'CHECK'} type="submit"></StyledButton>
              </ButtonContainer>
            )}
          </form>
        )}
      />
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  gap: 15px;
  max-width: 70%;
  min-width: 50%;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: #f6ffff;
  min-height: 380px;
  @media screen and (max-width: 767px) {
    min-width: 100%;
  }
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`

const TranslationContainer = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px auto;
  padding: 16px;
  background: ${props => (props.$isChecked === true ? colors.lightGreen : colors.lightBlue)};
  width: fit-content;
  border-radius: 16px;
  @media screen and (max-width: 723px) {
    flex-direction: column;
  }
`

const Word = styled.span`
  font-size: 20px;
  text-wrap: nowrap;
  @media screen and (max-width: 1023px) {
    text-wrap: pretty;
  }
`

const VolumeAction = styled(VolumeUpFillIcon)`
  fill: ${colors.successGreen};
  cursor: pointer;
  &:hover {
    fill: ${colors.blue};
  }
`

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
`

const Counter = styled(Chip)<{ $isDone: boolean }>`
  position: absolute;
  top: -5px;
  right: 0;
  background: ${props => (props.$isDone ? colors.green : 'auto')};
`

const IconContainer = styled.div`
  display: flex;
  width: 50px;
  justify-content: center;
  margin: 20px auto;
  cursor: pointer;
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
`
