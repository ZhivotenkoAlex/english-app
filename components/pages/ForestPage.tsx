'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import ForestItem from '../features/ForestItem'

export default function ForestPage() {
  const [inProgress, setInProgress] = useState(false)

  return (
    <Root>
      {inProgress ? (
        'Finished'
      ) : (
        <ForestItem inProgress={inProgress} handleProgress={setInProgress} />
      )}
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`
