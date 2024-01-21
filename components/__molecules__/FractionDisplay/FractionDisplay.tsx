import { themeColors } from '@/lib/theme'
import React from 'react'
import styled from 'styled-components'

interface IFractionDisplay {
  currentNum: number
  overall: number
}
function FractionDisplay({ currentNum, overall }: IFractionDisplay) {
  return <Fraction>{`${currentNum}/${overall}`}</Fraction>
}

const Fraction = styled.p`
  font-size: 1.2rem;
  color: ${themeColors.info};
`

export default FractionDisplay
