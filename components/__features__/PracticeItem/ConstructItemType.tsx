'use client'
import { colors } from '@/utils/colors'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Chip } from '@mui/material'
import { TextField } from '@mui/material'
import { useForm } from 'react-final-form'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import StepperIcon from '@/components/__atoms__/StepperIcon'

interface ChipData {
  key: number
  label: string
}

export default function ConstructItemType({ activeItem, input, isChecked }) {
  const form = useForm()
  const contentArray = activeItem?.en
    .split(' ')
    .map((item: any, index: number) => ({ label: item, key: index + 1 }))

  const [chipData, setChipData] = useState<readonly ChipData[]>(contentArray)
  const [text, setText] = useState('')

  const handleClick = (chipToDelete: ChipData) => () => {
    const content = (text + ' ' + chipToDelete.label).trim()

    setText(content)
    form.change('answer', content)
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

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
            multiline
            variant="standard"
          />
        </span>
        {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
      </TranslationContainer>
      {chipData.length ? (
        <Container>
          {chipData.map(item => (
            <StyledChip onClick={handleClick(item)} clickable key={item.key} label={item.label} />
          ))}
        </Container>
      ) : (
        <IconContainer>
          <StepperIcon Icon={QuestionLineIcon} />
        </IconContainer>
      )}
    </>
  )
}

const StyledChip = styled(Chip)`
  && {
    font-size: 20px;
    background-color: ${colors.lightGreen};
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

const StyledTextField = styled(TextField)`
  textarea {
    text-align: center;
    font-size: 20px;
  }
`
