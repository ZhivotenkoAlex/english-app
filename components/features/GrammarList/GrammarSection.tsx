import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { IGrammarExercise, IGrammarLevel } from '@/types'
import GrammarCard from '@/components/features/GrammarCard'

interface IGrammarSection {
  grammar: IGrammarLevel
}

function GrammarSection({ grammar }: IGrammarSection) {
  return (
    <div>
      <StyledTitle variant="h5">{grammar.level}</StyledTitle>
      <GrammarExercises>
        {grammar.levelExercises.map((exercise: IGrammarExercise) => (
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

const StyledTitle = styled(Typography)`
  && {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`

export default GrammarSection
