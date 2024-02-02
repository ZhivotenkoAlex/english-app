import ROUTES from '@/helpers/routes'
import { IGrammarExercise } from '@/types'
import { colors } from '@/utils/colors'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type PropTypes = {
  exercise: IGrammarExercise
}

export default function GrammarItem({ exercise }: PropTypes) {
  const { slug, subtitle, icon, title } = exercise
  return (
    <Root href={`${ROUTES.GRAMMAR}/${slug}`}>
      <Container>
        <StyledImage src={icon} alt="word cloud" width={100} height={100} />
        <Description>
          <StyledTitle>{title}</StyledTitle>
          <Subtitle>{subtitle}</Subtitle>
        </Description>
      </Container>
    </Root>
  )
}

const Root = styled(Link)`
  display: flex;
  padding: 16px;
  border: black 1px solid;
  border-radius: 16px;
  transition: scale 0.5s ease-in-out;
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  &:hover {
    border-color: ${colors.green};
    scale: 1.05;
    @media screen and (min-width: 1439px) {
      scale: 1.03;
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: fit;
  filter: grayscale(20%);
  max-width: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 16px;
  text-wrap: nowrap;
  @media screen and (max-width: 1023px) {
    align-items: center;
  }
`

const StyledTitle = styled.h3`
  text-wrap: pretty;
  text-align: left;
  @media screen and (max-width: 1023px) {
    text-align: center;
  }
`
const Subtitle = styled.h4`
  text-wrap: pretty;
`
