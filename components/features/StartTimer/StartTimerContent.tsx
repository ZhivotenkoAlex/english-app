import { DimensionType } from '@/components/molecules/CountdownTimer'
import { styled } from 'styled-components'

export default function StartTimerContent({
  dimension,
  time,
}: {
  dimension: DimensionType
  time: number
}) {
  return (
    <div>
      <Title>Starts after</Title>
      <Timer>{time}</Timer>
      <div>{dimension}</div>
    </div>
  )
}

const Timer = styled.div`
  font-size: 32px;
`

const Title = styled.h3`
  margin-bottom: 10px;
`
