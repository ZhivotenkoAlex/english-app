import React from 'react'
import styled from 'styled-components'

type CellType = 'contained' | 'outlined'
interface IContainedLetterCell {
  char?: string
  background: string
  type: CellType
  clickable?: boolean
}

function LetterCell({ char, background, type, clickable = false }: IContainedLetterCell) {
  return (
    <StyledEmptyLetterCell $background={background} $type={type} $clickable={clickable}>
      {char ? char : null}
    </StyledEmptyLetterCell>
  )
}

const StyledEmptyLetterCell = styled('div')<{
  $background: string
  $type: CellType
  $clickable: boolean
}>`
  border: ${({ $type }) => ($type === 'contained' ? 'none' : '1px solid gray')};
  background: ${({ $background }) => $background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5px;
  width: 50px;
  height: 45px;
  text-transform: uppercase;
  color: white;
  ${({ $clickable }) => ($clickable ? `cursor:pointer;` : null)};
`

export default LetterCell
