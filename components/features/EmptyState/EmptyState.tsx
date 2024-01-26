'use client'
import Heading from '@/components/atoms/Heading/Heading'
import { COLORS_ENUM } from '@/utils/colors'
import styled from 'styled-components'
interface EmptyStateProps {
  title?: string
}
const EmptyState = ({ title = 'No results' }: EmptyStateProps) => {
  return (
    <CentralBox>
      <Heading title={title} color={COLORS_ENUM.DARK} />
    </CentralBox>
  )
}

const CentralBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  width: 100%;
`

export default EmptyState
