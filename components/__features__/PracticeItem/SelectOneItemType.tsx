import { colors } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'
import { FormControlLabel, RadioGroup, TextField, Radio } from '@mui/material'

export default function SelectOneItemType({ activeItem, input, isChecked, isValidated }) {
  const contentArray = activeItem?.missed.split('$')

  const error = isValidated === false ? 'Wrong answer!' : null
  return (
    <>
      <Root>
        <Container $isChecked={isChecked}>
          <InputContainer>
            {contentArray.map((item, index) =>
              index == 1 ? (
                <span key={index}>
                  <StyledTextField
                    {...input}
                    error={!!error}
                    autoComplete="off"
                    autoCorrect="false"
                    autoFocus={true}
                    variant="standard"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </span>
              ) : (
                <span key={index}>
                  <Word>{item}</Word>
                </span>
              ),
            )}
          </InputContainer>
        </Container>
        <CheckboxGroup $isChecked={isChecked}>
          {activeItem.variants.map(item => (
            <CheckboxContainer key={item}>
              <FormControlLabel
                itemType="radio"
                onChange={input.onChange}
                value={item}
                control={<Radio color="success" />}
                label={item}
              />
            </CheckboxContainer>
          ))}
        </CheckboxGroup>
      </Root>
    </>
  )
}

const Root = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  min-height: 180px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 25px;
  background: ${props => (props.$isChecked === true ? colors.lightGreen : colors.lightBlue)};
  width: fit-content;
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const CheckboxGroup = styled(RadioGroup)<{ $isChecked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 16px;
  background: ${props => (props.$isChecked === true ? colors.lightGreen : colors.lightBlue)};
  width: fit-content;
  border-radius: 16px;
  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledTextField = styled(TextField)<{ error: boolean }>`
  max-width: 150px;
  input {
    text-align: center;
    font-size: 20px;
    color: ${props => (props.error ? colors.warning : 'initial')};
  }
`

const Word = styled.span`
  font-size: 20px;
  text-wrap: nowrap;
  @media screen and (max-width: 767px) {
    text-wrap: pretty;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 16px;
  background: ${colors.lightGreen};
  border-radius: 8px;
`
