import CountdownTimer, { TimerSize } from '@/components/molecules/CountdownTimer'
import React from 'react'
import styled from 'styled-components'
import ProgressTimerContent from './ProgressTimerContent'

export default function ProgressTimer({
  rounds,
  size = 'small',
  handleChangeWord,
  handleFinish,
  handleNoAnswer,
  minuteSeconds = 5,
}: {
  rounds: number
  size?: TimerSize
  handleChangeWord: () => void
  handleFinish: () => void
  handleNoAnswer: () => void
  minuteSeconds?: number
}) {
  const handleComplete = (totalElapsedTime: number) => {
    const passedRounds = Math.ceil(totalElapsedTime / minuteSeconds)
    handleNoAnswer()
    if (passedRounds < rounds) {
      handleChangeWord()
    } else {
      handleFinish()
    }

    return {
      shouldRepeat: passedRounds < rounds,
    }
  }

  return (
    <Root>
      <CountdownTimer onComplete={handleComplete} RenderTime={ProgressTimerContent} size={size} />
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
