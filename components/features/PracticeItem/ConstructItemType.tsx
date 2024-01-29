'use client'
import { colors } from '@/utils/colors'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Chip, InputAdornment } from '@mui/material'
import { TextField } from '@mui/material'
import { FieldInputProps, useForm } from 'react-final-form'
import { LessonPractice } from '@/types'
import { shuffleArray } from '@/helpers/shuffleArray'
import CloseIcon from 'remixicon-react/CloseLineIcon'

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

  // const shuffledArray = shuffleArray(contentArray)
  const shuffledArray = contentArray

  const [chipData, setChipData] = useState<readonly ChipData[]>(shuffledArray)
  const [text, setText] = useState<string>('')

  const handleClick = (chipToDelete: ChipData) => () => {
    const content = (text + ' ' + chipToDelete.label).trim()
    setText(content)
    form.change('answer', content)
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  const handleDelete = () => {
    setText('')
    setChipData(shuffledArray)
    form.change('answer', '')
  }

  const error = isValidated === false ? 'Wrong answer!' : null

  return (
    <>
      <TranslationContainer $isChecked={isChecked}>
        <TaskPhrase>{activeItem.ua}</TaskPhrase>
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
              endAdornment: (
                <InputAdornment position="end" onClick={handleDelete}>
                  <DeleteIcon />
                </InputAdornment>
              ),
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
  flex-wrap: wrap;
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

const TaskPhrase = styled.span`
  display: inline-flex;
  color: ${colors.darkGrey};
  margin-bottom: 20px;
  padding-right: 24px;
`

const DeleteIcon = styled(CloseIcon)`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    fill: ${colors.red};
    scale: 1.1;
  }
`
