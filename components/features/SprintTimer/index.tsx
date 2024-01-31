import CountdownTimer, { TimerSize } from '@/components/molecules/CountdownTimer'
import React from 'react'
import styled from 'styled-components'
import SprintTimerContent from './SprintTimerContent'

export default function SprintTimer({
  rounds,
  handleFinish,
}: {
  rounds: number
  size?: TimerSize
  handleFinish: () => void
}) {
  const minuteSeconds = 5
  const handleComplete = (totalElapsedTime: number) => {
    const passedRounds = Math.ceil(totalElapsedTime / minuteSeconds)

    handleFinish()

    return {
      shouldRepeat: passedRounds < rounds,
    }
  }

  return (
    <Root>
      <CountdownTimer
        duration={6}
        onComplete={handleComplete}
        RenderTime={SprintTimerContent}
        size="small"
      />
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
