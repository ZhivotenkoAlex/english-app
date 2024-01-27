import { colors } from '@/utils/colors'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styled from 'styled-components'

type ColorHex = `#${string}`

type MultipleColors = { 0: ColorHex } & { 1: ColorHex } & ColorHex[]

const minuteSeconds = 5

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
}

const renderTime = (dimension: string, time: number) => {
  return (
    <div>
      <Timer>{time}</Timer>
      <div>{dimension}</div>
    </div>
  )
}

const getTimeSeconds = (time: number) => (minuteSeconds - time + 1) | 0

export default function ProgressTimer({
  rounds = 5,
  handleChangeWord,
  handleFinish,
}: {
  rounds: number
  handleChangeWord: any
  handleFinish: () => void
}) {
  const handleComplete = (totalElapsedTime: number) => {
    const passedRounds = Math.ceil(totalElapsedTime / minuteSeconds)
    if (passedRounds < rounds) {
      handleChangeWord()
    }
    if (passedRounds >= rounds) {
      handleFinish()
    }
    return {
      shouldRepeat: passedRounds < rounds,
    }
  }

  return (
    <Root>
      <CountdownCircleTimer
        {...timerProps}
        colors={[colors.green, colors.orange, colors.red] as MultipleColors}
        colorsTime={[4, 2, 0]}
        duration={minuteSeconds}
        initialRemainingTime={minuteSeconds - 1}
        onComplete={handleComplete}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime('seconds', getTimeSeconds(elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
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
const Timer = styled.div`
  font-size: 32px;
`
