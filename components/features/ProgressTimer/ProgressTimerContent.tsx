import { DimensionType } from '@/components/molecules/CountdownTimer'
import { styled } from 'styled-components'

export default function ProgressTimerContent({
  dimension,
  time,
}: {
  dimension: DimensionType
  time: number
}) {
  return (
    <div>
      <Timer>{time}</Timer>
      <div>{dimension}</div>
    </div>
  )
}

const Timer = styled.div`
  font-size: 32px;
`
