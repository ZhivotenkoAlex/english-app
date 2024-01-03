import ROUTES from '@/helpers/routes'
import { colors } from '@/utils/colors'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type PropTypes = {
  data: { title: string; subtitle: string; imageName: string; path: ROUTES }
}

export default function ServiceItem({ data }: PropTypes) {
  return (
    <Root href={data.path}>
      <Container>
        <StyledImage
          src={`/images/${data.imageName}.jpg`}
          alt="word cloud"
          width={200}
          height={200}
        />
        <Description>
          <StyledTitle>{data.title}</StyledTitle>
          <Subtitle>{data.subtitle}</Subtitle>
        </Description>
      </Container>
    </Root>
  )
}

const Root = styled(Link)`
  padding: 16px;
  border: black 1px solid;
  border-radius: 16px;
  transition: scale 0.5s ease-in-out;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  &:hover {
    border-color: ${colors.green};
    scale: 1.05;
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
  object-fit: contain;
  filter: grayscale(20%);
  min-width: 30%;
  max-width: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 16px;
  text-wrap: nowrap;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`

const StyledTitle = styled.h3`
  text-wrap: nowrap;
`

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
`
