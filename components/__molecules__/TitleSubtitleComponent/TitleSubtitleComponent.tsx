import React from 'react'
import styled from 'styled-components'

interface ITitleComponent {
  title: string
  subtitle?: string
}
const TitleSubtitleComponent = ({ title, subtitle }: ITitleComponent) => {
  return (
    <Wrapper>
      {!!subtitle && <p>{subtitle}</p>}
      <h4>{title}</h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default TitleSubtitleComponent
