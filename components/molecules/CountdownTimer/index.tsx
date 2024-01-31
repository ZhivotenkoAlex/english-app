import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { colors } from '@/utils/colors'

type ColorHex = `#${string}`

type MultipleColors = { 0: ColorHex } & { 1: ColorHex } & ColorHex[]

export type DimensionType = 'seconds' | 'minutes' | 'hours'

export type TimerSize = 'small' | 'normal'

type RenderPropsType = { dimension: DimensionType; time: number; size: 'small' | 'normal' }

const TimerSizes = {
  small: 80,
  normal: 120,
}

type PropTypes = {
  onComplete: (totalElapsedTime: number) => { shouldRepeat: boolean }
  RenderTime: (props: RenderPropsType) => ReactNode
  size?: 'small' | 'normal'
  duration?: number
  dimension?: DimensionType
}

export default function CountdownTimer({
  onComplete,
  RenderTime,
  size = 'normal',
  duration = 5,
  dimension = 'seconds',
}: PropTypes) {
  const getTimeSeconds = (time: number) => (duration - time + 1) | 0
  const strokeWidth = size === 'normal' ? 6 : 4
  return (
    <Root>
      <CountdownCircleTimer
        isPlaying={true}
        colors={[colors.green, colors.orange, colors.red] as MultipleColors}
        colorsTime={[4, 2, 0]}
        duration={duration}
        initialRemainingTime={duration}
        onComplete={onComplete}
        size={TimerSizes[size]}
        strokeWidth={strokeWidth}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            <RenderTime dimension={dimension} time={getTimeSeconds(elapsedTime)} size={size} />
          </span>
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
