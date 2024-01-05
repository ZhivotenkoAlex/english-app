'use client'
import { colors } from '@/utils/colors'
import React, { useCallback, useState } from 'react'
import { Chip, TextField } from '@mui/material'
import styled from 'styled-components'
import VolumeUpFillIcon from 'remixicon-react/VolumeUpFillIcon'
import { getVoice } from '@/helpers/getVoice'
import Button from '@/components/__molecules__/Button/Button'
import { Form, Field } from 'react-final-form'
import Link from 'next/link'
import ROUTES from '@/helpers/routes'

interface InitialValue {
  word: string
}

export default function WordCheckingItem({ vocabulary, clickHandler }: any) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeItem, setActiveItem] = useState(vocabulary[activeIndex])
  const [isChecked, setIsChecked] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const onSubmit = useCallback(
    (data: InitialValue, form: any) => {
      const isCorrect = data.word === activeItem.en
      setIsChecked(isCorrect)
      if (activeIndex + 1 === vocabulary.length) {
        setIsDone(true)
      }
      if (isChecked && isCorrect && !isDone) {
        setActiveIndex(activeIndex + 1)
        setActiveItem(vocabulary[activeIndex + 1])
        setIsChecked(false)
        form.change('word', '')
      }
    },
    [activeIndex, activeItem.en, isChecked, isDone, vocabulary],
  )

  const handleNextExercise = () => clickHandler(2)

  const counterLabel = `${activeIndex + 1} / ${vocabulary.length}`

  return (
    <Root>
      <WordContainer>
        <Word>{activeItem?.ua}</Word>
        <Counter label={counterLabel} $isDone={isDone} />
      </WordContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            {isDone ? null : (
              <Field
                name="word"
                render={({ input, meta }) => {
                  return (
                    <InputContainer>
                      <div>
                        <StyledTextField
                          {...input}
                          placeholder="Введіть переклад"
                          autoComplete="off"
                          autoCorrect="false"
                          autoFocus={true}
                          disabled={isDone}
                        />
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                      </div>
                      <StyledButton
                        label={'Get hint'}
                        color="grey"
                        onClick={() => form.change('word', activeItem.en)}
                      />
                    </InputContainer>
                  )
                }}
              />
            )}

            {
              <TranslationContainer $isChecked={isChecked}>
                <Word>{isChecked ? activeItem.en : ' '}</Word>
                {isChecked ? <VolumeAction onClick={() => getVoice(activeItem?.en)} /> : null}
              </TranslationContainer>
            }
            {isDone ? (
              <>
                <StyledButton label={'NEXT EXERCISE'} onClick={handleNextExercise}></StyledButton>
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
  width: 500px;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: #f6ffff;
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const Word = styled.h4`
  text-transform: uppercase;
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

const StyledTextField = styled(TextField)`
  input {
    text-align: center;
    font-size: 20px;
  }
`

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
