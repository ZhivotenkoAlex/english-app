import CountdownTimer from '@/components/molecules/CountdownTimer'
import React from 'react'
import styled from 'styled-components'
import StartTimerContent from './StartTimerContent'

export default function StartTimer({ handleTimerOut }: { handleTimerOut: () => void }) {
  const handleComplete = () => {
    handleTimerOut()
    return {
      shouldRepeat: false,
    }
  }

  return (
    <Root>
      <CountdownTimer onComplete={handleComplete} RenderTime={StartTimerContent} size="large" />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  text-align: center;
  padding-top: 40px;
`
