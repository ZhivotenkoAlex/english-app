import React from 'react'
import styled from 'styled-components'
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon'
import { themeColors } from '@/lib/theme'
import Link from 'next/link'

interface IExerciseCloseBlock {
  link: string
}

function ExerciseCloseBlock({ link }: IExerciseCloseBlock) {
  return (
    <Wrapper>
      <Link href={link}>
        <CloseCircleLineIcon size={40} color={themeColors.gray} />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: end;
`
export default ExerciseCloseBlock
