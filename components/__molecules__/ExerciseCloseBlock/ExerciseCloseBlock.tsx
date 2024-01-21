import React from 'react'
import styled from 'styled-components'
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon'
import { themeColors } from '@/lib/theme'

function ExerciseCloseBlock() {
  return (
    <Wrapper>
      <CloseCircleLineIcon size={40} color={themeColors.gray} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: end;
`
export default ExerciseCloseBlock
