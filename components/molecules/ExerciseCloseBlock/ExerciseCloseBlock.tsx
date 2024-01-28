import React from 'react'
import styled from 'styled-components'
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon'
import { themeColors } from '@/lib/theme'
import Link from 'next/link'
import { colors } from '@/utils/colors'

interface IExerciseCloseBlock {
  link: string
}

function ExerciseCloseBlock({ link }: IExerciseCloseBlock) {
  return (
    <Wrapper>
      <Link href={link}>
        <StyledIcon size={40} color={themeColors.gray} />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: end;
`

const StyledIcon = styled(CloseCircleLineIcon)`
  transition: all 0.5s ease-in-out;
  &:hover {
    fill: ${colors.green};
    scale: 1.05;
  }
`
export default ExerciseCloseBlock
