import CountdownTimer from '@/components/molecules/CountdownTimer'
import React from 'react'
import styled from 'styled-components'
import ProgressTimerContent from './ProgressTimerContent'

export default function ProgressTimer({
  rounds = 5,
  handleChangeWord,
  handleFinish,
  handleNoAnswer,
}: {
  rounds: number
  handleChangeWord: any
  handleFinish: () => void
  handleNoAnswer: () => void
}) {
  const minuteSeconds = 5
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
      <CountdownTimer onComplete={handleComplete} RenderTime={ProgressTimerContent} />
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
