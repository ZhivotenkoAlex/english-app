import ROUTES from '@/helpers/routes'
import { ITraining } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface ITrainingCard {
  training: ITraining
}
function TrainingCard({ training }: ITrainingCard) {
  return (
    <StyledLink $gridArea={training.gridArea} href={`${ROUTES.VOCABULARY}/${training.path}`}>
      <StyledImage src={training.background} alt={training.title} />
      <TextBlock>
        <Title $titleColor={training.titleColor}>{training.title}</Title>
        <Subtitle>{training.subtitle}</Subtitle>
      </TextBlock>
    </StyledLink>
  )
}

const StyledImage = styled(Image)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right;
`

const TextBlock = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`
const Title = styled.p<{ $titleColor: string }>`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  color: ${({ $titleColor }) => $titleColor};
`
const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.3);
`
const StyledLink = styled(Link)<{ $gridArea: string }>`
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  grid-area: ${({ $gridArea }) => $gridArea};

  &:hover {
    transform: scale(1.02);
  }
`

export default TrainingCard
