'use client'
import Heading from '@/components/__atoms__/Heading/Heading'
import Button from '@/components/__molecules__/Button/Button'
import styled from 'styled-components'
interface EmptyStateProps {
  title?: string
}
const EmptyState = ({ title = 'No results' }: EmptyStateProps) => {
  return (
    <CentralBox>
      <Heading title={title} color="dark" />
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
