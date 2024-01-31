import { DimensionType, TimerSize } from '@/components/molecules/CountdownTimer'
import { styled } from 'styled-components'

export default function ProgressTimerContent({
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
  font-size: ${({ $size }) => ($size === 'normal' ? '2rem' : '1.5rem')};
`

const Dimension = styled.div<{ $size: TimerSize }>`
  font-size: ${({ $size }) => ($size === 'normal' ? '1rem' : '0.8rem')};
`
