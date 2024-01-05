import styled from 'styled-components'
import { COLOR, colors } from '../../../utils/colors'

type Color = 'blue' | 'green' | 'grey'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'contained' | 'text' | 'outlined'
type ButtonType = 'submit' | 'reset' | 'button'
interface IButton {
  label: string
  variant?: ButtonVariant
  onClick?: () => void
  color?: Color
  size?: ButtonSize
  disabled?: boolean
  fullWidth?: boolean
  type?: ButtonType
}

function Button({
  variant = 'contained',
  label,
  onClick,
  disabled = false,
  color = 'green',
  size = 'medium',
  fullWidth = false,
  type = 'button',
}: IButton) {
  return (
    <ButtonElement
      $variant={variant}
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
      $fullWidth={fullWidth}
      type={type}
    >
      {label}
    </ButtonElement>
  )
}

const ButtonElement = styled('button')<{
  size: string
  color: string
  $variant: string
  $fullWidth: boolean
}>`
  border-radius: 5px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border: none;
  cursor: pointer;
  padding: 6px 16px;
  color: ${colors.lightWhite};
  background: ${({ color }) => COLOR[color]};
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.5s ease-in-out;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `height:20px;
                    font-size: 12px;
                `
      case 'medium': {
        return `height:30px;
                font-size: 14px;`
      }
      default:
        return `height:40px;
                font-size: 16px;`
    }
  }};

  &:disabled {
    cursor: not-allowed;
    background: ${({ color }) => {
      return color === 'green' ? colors.lightGreen : colors.grey
    }};
  }

  ${({ $variant, color }) => {
    if ($variant === 'outlined') {
      return `
                background:transparent;
                color: ${COLOR[color]};
                border: 2px solid ${COLOR[color]} 
            `
    } else if ($variant === 'text') {
      return `
            background:transparent;
            color: ${COLOR[color]}
        `
    } else {
      return ''
    }
  }}
  &:hover {
    box-sizing: border-box;
    color: ${colors.dark};
    scale: 1.05;
    border: 1px ${colors.darkGreen} solid;
  }
`
export default Button
