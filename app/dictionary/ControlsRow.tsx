import Input from '@/components/__molecules__/Input/Input'
import { Button, ButtonGroup, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import { DICTIONARY_SELECT_OPTIONS } from '@/helpers/mock-data'

export const BUTTONS = [
  {
    id: 1,
    label: 'All',
  },
  {
    id: 2,
    label: <CheckboxBlankCircleLineIcon />,
  },
  {
    id: 3,
    label: <TimeLineIcon />,
  },
  {
    id: 4,
    label: <CheckboxCircleLineIcon />,
  },
]
function ControlsRow() {
  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState('phrase')
  const [isStandardView, setIsStandardView] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  const handleChangeView = () => {
    setIsStandardView(!isStandardView)
  }

  const handleChangeFilter = newFilter => {
    setSelectedFilter(newFilter)
  }

  const getVariant = (label: string) => {
    return selectedFilter === label ? 'contained' : 'outlined'
  }

  return (
    <Wrapper>
      <Input
        fullWidth
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChangeSearch}
      />

      <Section>
        <TextField select value={selectedOption} size="small" onChange={handleOptionChange}>
          {DICTIONARY_SELECT_OPTIONS.map(option => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <StyledMenuLineIcon
          size={40}
          onClick={handleChangeView}
          color="blue"
          $isStandardView={isStandardView}
        />
        <ButtonGroup variant="outlined">
          {BUTTONS.map(button => (
            <Button
              key={button.id}
              variant={getVariant(button.label as string)}
              onClick={() => handleChangeFilter(button.label)}
            >
              {button.label}
            </Button>
          ))}
        </ButtonGroup>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1rem;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const StyledMenuLineIcon = styled(MenuLineIcon)<{ $isStandardView: boolean }>`
border: ${({ $isStandardView }) => ($isStandardView ? 'none' : ' 1px solid blue')} ,
borderRadius: '5px',
cursor: 'pointer',
`

const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  @media screen and (max-width: 640px) {
    justify-content: flex-start;
  }
`
export default ControlsRow
