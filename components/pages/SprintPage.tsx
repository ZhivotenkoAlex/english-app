'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import StartTimer from '../features/StartTimer'
import SprintContent from '../features/SprintContent'

export default function SprintPage() {
  const [isStarted, setStarted] = useState(false)

  const handleTimerOut = () => {
    setStarted(true)
  }

  const handleStarted = () => setStarted(false)

  return (
    <Root>
      {isStarted ? (
        <SprintContent handleStarted={handleStarted} />
      ) : (
        <StartTimer handleTimerOut={handleTimerOut} />
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
