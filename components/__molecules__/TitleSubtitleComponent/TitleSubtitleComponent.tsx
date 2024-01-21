import React from 'react'
import styled from 'styled-components'

interface ITitleComponent {
  title: string
  subtitle?: string
  reverse?: boolean
}
const TitleSubtitleComponent = ({ title, subtitle, reverse = false }: ITitleComponent) => {
  return (
    <Wrapper $reverse={reverse}>
      {!!subtitle && <p>{subtitle}</p>}
      <h4>{title}</h4>
    </Wrapper>
  )
}

const Wrapper = styled.section<{ $reverse: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'column-reverse' : 'column')};
  gap: 0.5rem;
`

export default TitleSubtitleComponent
