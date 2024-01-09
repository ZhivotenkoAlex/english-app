'use client'
import { colors } from '@/utils/colors'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import { TextField } from '@mui/material'
import { FieldInputProps, useForm } from 'react-final-form'
import { LessonPractice } from '@/types'

type ChipData = {
  key: number
  label: string
}

type PropTypes = {
  activeItem: LessonPractice
  input: FieldInputProps<string, HTMLElement>
  isChecked: boolean
  isValidated: boolean | null
}

export default function ConstructItemType({
  activeItem,
  input,
  isChecked,
  isValidated,
}: PropTypes) {
  const form = useForm()
  const contentArray = activeItem?.en
    .split(' ')
    .map((item: string, index: number) => ({ label: item, key: index + 1 }))

  const [chipData, setChipData] = useState<readonly ChipData[]>(contentArray)
  const [text, setText] = useState<string>('')

  const handleClick = (chipToDelete: ChipData) => () => {
    const content = (text + ' ' + chipToDelete.label).trim()
    setText(content)
    form.change('answer', content)
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

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
            InputProps={{
              readOnly: true,
            }}
            error={!!error}
            multiline
            variant="standard"
          />
        </span>
      </TranslationContainer>
      {chipData.length ? (
        <Container>
          {chipData.map(item => (
            <StyledChip onClick={handleClick(item)} clickable key={item.key} label={item.label} />
          ))}
        </Container>
      ) : null}
    </>
  )
}

const StyledChip = styled(Chip)`
  && {
    font-size: 20px;
    background-color: ${colors.lightGreen};
  }
`

const TranslationContainer = styled.div<{ $isChecked: boolean }>`
  margin: 20px auto;
  padding: 16px;
  background: ${props => (props.$isChecked === true ? colors.lightGreen : colors.lightBlue)};
  border-radius: 16px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
  padding: 25px;
  background: ${colors.lightBlue};
  width: fit-content;
  border-radius: 16px;
`

const StyledTextField = styled(TextField)<{ error: boolean }>`
  textarea {
    text-align: center;
    font-size: 20px;
    color: ${props => (props.error ? colors.warning : 'inherit')};
  }
  p {
    text-align: center;
  }
`
