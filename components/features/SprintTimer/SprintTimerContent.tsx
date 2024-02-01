import { DimensionType, TimerSize } from '@/components/molecules/CountdownTimer'
import { styled } from 'styled-components'

const timerFontSize = {
  normal: '2rem',
  small: '1.5rem',
  mobile: '1rem',
}

const dimensionFontSize = {
  normal: '1.5rem',
  small: '0.8rem',
  mobile: '0.5rem',
}

export default function SprintTimerContent({
  dimension,
  time,
  size,
}: {
  dimension: DimensionType
  time: number
  size: TimerSize
}) {
  return (
    <div>
      <Timer $size={size}>{time}</Timer>
      <Dimension $size={size}>{dimension}</Dimension>
    </div>
  )
}

const Timer = styled.div<{ $size: TimerSize }>`
  font-size: ${({ $size }) => timerFontSize[$size]};
`

const Dimension = styled.div<{ $size: TimerSize }>`
  font-size: ${({ $size }) => dimensionFontSize[$size]};
`
