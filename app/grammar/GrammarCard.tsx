import CardWrapper from '@/components/__atoms__/CardWrapper/CardWrapper'
import TitleSubtitleComponent from '@/components/__molecules__/TitleSubtitleComponent/TitleSubtitleComponent'
import { IGrammarExercise } from '@/types'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface IGrammarCard {
  exercise: IGrammarExercise
}

function GrammarCard({ exercise }: IGrammarCard) {
  return (
    <Wrapper>
      <CardWrapper>
        <Image src={exercise.icon} alt={exercise.title} />
        <TitleSubtitleComponent title={exercise.title} subtitle={exercise.subtitle} />
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`

export default GrammarCard
