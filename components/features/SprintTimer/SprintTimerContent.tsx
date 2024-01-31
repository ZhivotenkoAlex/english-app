import { DimensionType } from '@/components/molecules/CountdownTimer'
import { styled } from 'styled-components'

export default function SprintTimerContent({
  dimension,
  time,
}: {
  dimension: DimensionType
  time: number
}) {
  return (
    <div>
      <Timer>{time}</Timer>
      <Dimension>{dimension}</Dimension>
    </div>
  )
}

const Timer = styled.div`
  font-size: 1.5rem;
`

const Dimension = styled.div`
  font-size: 0.8rem;
`
