import { colors } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { LessonPractice } from '@/types'
import { FieldInputProps } from 'react-final-form'

type PropTypes = {
  activeItem: LessonPractice
  input: FieldInputProps<string, HTMLElement>
  isChecked: boolean
  isValidated: boolean | null
}

export default function InputItemType({ activeItem, input, isChecked, isValidated }: PropTypes) {
  const contentArray = activeItem?.missed.split('$')
  const error = isValidated === false ? 'Wrong answer!' : null
  return (
    <>
      <TranslationContainer $isChecked={isChecked}>
        <InputContainer>
          {contentArray.map((item, index) =>
            index == 1 ? (
              <span key={index}>
                <StyledTextField
                  {...input}
                  error={!!error}
                  placeholder={activeItem.placeholder}
                  autoComplete="off"
                  autoCorrect="false"
                  autoFocus={true}
                  variant="standard"
                />
              </span>
            ) : (
              <span key={index}>
                <Word>{item}</Word>
              </span>
            ),
          )}
        </InputContainer>
      </TranslationContainer>
    </>
  )
}

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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledTextField = styled(TextField)<{ error: boolean }>`
  max-width: 100px;
  width: fit-content;
  input {
    text-align: center;
    font-size: 20px;
    color: ${props => (props.error ? colors.warning : 'initial')};
  }
`

const Word = styled.span`
  font-size: 20px;
  text-wrap: nowrap;
`
