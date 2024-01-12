import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import GrammarCard from './GrammarCard'
import { IGrammarLevel } from '@/types'

interface IGrammarSection {
  level: IGrammarLevel
}

function GrammarSection({ level }: IGrammarSection) {
  return (
    <div>
      <Typography variant="h5">{level.level}</Typography>
      <GrammarExercises>
        {level.exercises.map(exercise => (
          <GrammarCard key={exercise.title} exercise={exercise} />
        ))}
      </GrammarExercises>
    </div>
  )
}

const GrammarExercises = styled('div')`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export default GrammarSection
