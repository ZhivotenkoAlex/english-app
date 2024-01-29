import StatusIcon from '@/components/atoms/StatusIcon'
import ROUTES from '@/helpers/routes'
import { EXERCISE_STATUS } from '@/types'
import { colors } from '@/utils/colors'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type PropTypes = {
  data: { slug: string; status: EXERCISE_STATUS; imageName: string; topic: string }
}

export default function LessonItem({ data }: PropTypes) {
  const { slug, status, imageName, topic } = data
  return (
    <Root href={`${ROUTES.LESSONS}/${slug}`}>
      <Container>
        <StyledImage
          src={`/images/lessons/${imageName}.jpg`}
          alt="word cloud"
          width={200}
          height={140}
        />
        <Description>
          <StyledTitle>{topic}</StyledTitle>
          <StatusIcon status={status} />
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
`
