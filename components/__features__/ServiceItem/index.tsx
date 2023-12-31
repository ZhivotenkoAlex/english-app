'use client'
import Image from 'next/image'
import styled from 'styled-components'

type PropTypes = {
  data: { title: string; subtitle: string; imageName: string }
}

export default function ServiceItem({ data }: PropTypes) {
  return (
    <Root>
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
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  padding: 16px;
  border: black 1px solid;
  border-radius: 16px;
`

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: contain;
  filter: grayscale(20%);
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 16px;
  text-wrap: balance;
`

const StyledTitle = styled.h3``

const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
`
