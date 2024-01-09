import React from 'react'
import styled from 'styled-components'
import Card from '@/components/__molecules__/Card/Card'
import { DICTIONARY_STATISTICS } from '@/helpers/mock-data'

function Statistics() {
  return (
    <StatisticsRow>
      <Card items={[DICTIONARY_STATISTICS[0]]} />
      <Card items={DICTIONARY_STATISTICS.slice(1)} />
    </StatisticsRow>
  )
}

const StatisticsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`

export default Statistics
