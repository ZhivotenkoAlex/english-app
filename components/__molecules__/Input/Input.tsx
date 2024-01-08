import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
interface IInput {
  type?: string
  value: string
  name?: string
  placeholder: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}
function Input({ value, placeholder, name, type = 'text', ...rest }: IInput) {
  return <InputElement placeholder={placeholder} id={name} {...rest} />
}

const InputElement = styled.input`
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  height: 40px;
  padding-left: 6px;

  &:focus {
    outline: none;
    border: 2px solid ${colors.blue};
  }
`
export default Input
