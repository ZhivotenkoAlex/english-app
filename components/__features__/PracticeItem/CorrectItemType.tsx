import { colors } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

export default function CorrectItemType({ activeItem, input, isChecked, isValidated }) {
  const error = isValidated === false ? 'Wrong answer!' : null
  return (
    <>
      <TranslationContainer $isChecked={isChecked}>
        <span>
          <StyledTextField
            {...input}
            placeholder={activeItem.placeholder}
            autoComplete="off"
            autoCorrect="false"
            autoFocus={true}
            fullWidth
            multiline
            variant="standard"
            error={!!error}
          />
        </span>
      </TranslationContainer>
    </>
  )
}

const TranslationContainer = styled.div<{ $isChecked: boolean }>`
  margin: 20px auto;
  padding: 16px;
  background: ${props => (props.$isChecked === true ? colors.lightGreen : colors.lightBlue)};
  border-radius: 16px;
`

const StyledTextField = styled(TextField)<{ error: boolean }>`
  max-width: 70%;
  textarea {
    text-align: center;
    font-size: 20px;
    color: ${props => (props.error ? colors.warning : 'auto')};
  }
`
