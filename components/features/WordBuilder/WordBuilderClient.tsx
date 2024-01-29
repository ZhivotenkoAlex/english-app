'use client'
import React from 'react'
import styled from 'styled-components'
import Exercise from './Exercise'

function WordBuilderClient() {
  return (
    <Wrapper>
      <div style={{ flex: 8 }}>
        <Exercise />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
`

export default WordBuilderClient
