import FractionDisplay from '@/components/molecules/FractionDisplay/FractionDisplay'
import { Checkbox } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

interface ExerciseStatistics {
  isPronunciation: boolean
  amountOfWords: number
  exercisedAmount: number
  handleTogglePronunciation: () => void
}
function ExerciseStatistics({
  isPronunciation,
  amountOfWords,
  exercisedAmount,
  handleTogglePronunciation,
}) {
  return (
    <Row>
      <label>
        <Checkbox checked={isPronunciation} onChange={handleTogglePronunciation} />
        Pronunciate
      </label>
      <FractionDisplay currentNum={exercisedAmount} overall={amountOfWords} />
    </Row>
  )
}

const Row = styled('div')`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3rem;
`
export default ExerciseStatistics
