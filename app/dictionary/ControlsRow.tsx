import Input from '@/components/__molecules__/Input/Input'
import { Button, ButtonGroup, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import WordsList from './WordsList'

const OPTIONS = [
  {
    id: 1,
    value: 'all',
    label: 'All',
  },
  {
    id: 2,
    value: 'word',
    label: 'Word',
  },
  {
    id: 3,
    value: 'phrase',
    label: 'Phrase',
  },
]

const BUTTONS = [
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
    console.log(e.target)
    setSelectedOption(e.target.value)
  }

  const handleChangeView = () => {
    setIsStandardView(!isStandardView)
  }

  const handleChangeFilter = newFilter => {
    setSelectedFilter(newFilter)
  }
  return (
    <Wrapper>
      <Input type="text" placeholder="Search" value={search} onChange={handleChangeSearch} />

      <Section>
        <TextField select value={selectedOption} size="small" onChange={handleOptionChange}>
          {OPTIONS.map(option => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <MenuLineIcon
          size={40}
          onClick={handleChangeView}
          color="blue"
          style={{
            border: isStandardView ? 'none' : ' 1px solid blue',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        />
        <ButtonGroup variant="outlined">
          {BUTTONS.map(button => (
            <Button
              key={button.id}
              variant={selectedFilter === button.label ? 'contained' : 'outlined'}
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

  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
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
