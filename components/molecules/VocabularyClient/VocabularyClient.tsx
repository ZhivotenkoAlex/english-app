'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TrainingCard from '../TrainingCard/TrainingCard'
import VOCABULARY_TRAININGS, { tabletVersionTrainings } from '@/helpers/vocabulary'
import { useMediaQuery } from '@mui/material'

function VocabularyClient() {
  const [trainings, setTrainings] = useState(VOCABULARY_TRAININGS)
  const isTablet = useMediaQuery('(max-width:900px)')

  useEffect(() => {
    if (isTablet) {
      let arr = trainings.filter(item => !tabletVersionTrainings.includes(item.title))
      setTrainings(arr)
    } else {
      setTrainings(trainings)
    }
  }, [isTablet])

  return (
    <Wrapper>
      {trainings.map(training => (
        <TrainingCard key={training.title} training={training} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > div {
      max-width: 45%;
    }
  }

  @media screen and (max-width: 665px) {
    & > div {
      max-width: 90%;
    }
  }
`
export default VocabularyClient
