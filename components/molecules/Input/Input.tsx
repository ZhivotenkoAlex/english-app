import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
interface IInput {
  type?: string
  value: string
  name?: string
  fullWidth?: boolean
  placeholder: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}
function Input({ value, placeholder, name, type = 'text', fullWidth = false, ...rest }: IInput) {
  return <InputElement placeholder={placeholder} id={name} $fullWidth={fullWidth} {...rest} />
}

const InputElement = styled('input')<{ $fullWidth: boolean }>`
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  height: 40px;
  padding-left: 6px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  &:focus {
    outline: none;
    border: 2px solid ${colors.blue};
  }
`
export default Input
