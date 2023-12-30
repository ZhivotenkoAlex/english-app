'use client'
import { Typography } from '@mui/material'
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
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="body1">{data.subtitle}</Typography>
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
