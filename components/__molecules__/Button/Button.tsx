import styled from 'styled-components'
import { COLOR, colors } from '../../../utils/colors'

type Color = 'blue' | 'green' | 'grey'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'contained' | 'text' | 'outlined'
interface IButton {
  type?: ButtonType
  onClick: () => void
  label: string
  color: Color
  size: ButtonSize
  disabled: boolean
  fullWidth?: boolean
}

function Button({
  type = 'contained',
  label,
  disabled,
  onClick,
  color = 'green',
  size = 'medium',
  fullWidth = false,
}: IButton) {
  return (
    <ButtonElement
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
      $fullWidth={fullWidth}
    >
      {label}
    </ButtonElement>
  )
}

const ButtonElement = styled('button')<{
  size: string
  color: string
  type: string
  $fullWidth: boolean
}>`
  border-radius: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border: none;
  cursor: pointer;
  padding: 0 10px;
  color: ${colors.lightWhite};
  background: ${({ color }) => COLOR[color]};
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `height:20px;
                    font-size: 14px;
                `
      case 'medium': {
        return `height:30px;
                font-size: 16px;`
      }
      default:
        return `height:40px;
                font-size: 18px;`
    }
  }};

  &:disabled {
    cursor: not-allowed;
    background: ${({ color }) => {
      return color === 'green' ? colors.lightGreen : colors.grey
    }};
  }

  ${({ type, color }) => {
    if (type === 'outlined') {
      return `
                background:transparent;
                color: ${COLOR[color]};
                border: 2px solid ${COLOR[color]} 
            `
    } else if (type === 'text') {
      return `
            background:transparent;
            color: ${COLOR[color]}
        `
    } else {
      return ''
    }
  }}
`
export default Button
