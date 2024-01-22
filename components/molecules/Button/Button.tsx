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
  fontColor?: string
  width?: string
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
  fontColor = colors.lightWhite,
  width = 'auto',
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
      $fontColor={fontColor}
      $width={width}
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
  $fontColor: string
  $width: string
}>`
  border-radius: 5px;
  width: ${({ $fullWidth, $width }) => ($fullWidth ? '100%' : $width)};
  border: none;
  cursor: pointer;
  padding: 6px 16px;
  color: ${({ $fontColor }) => COLOR[$fontColor]};
  background: ${({ color }) => COLOR[color]};
  transition: all 0.5s ease-in-out;
  font-weight: 600;
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
    background: ${({ color, $variant }) => {
      if ($variant === 'text') {
        return 'transparent'
      } else {
        return color === 'green' ? colors.lightGreen : colors.grey
      }
    }};
  }

  ${({ $variant, color }) => {
    if ($variant === 'outlined') {
      return `
                background:transparent;
                color: ${({ $fontColor }) => COLOR[$fontColor]};;
                border: 2px solid ${COLOR[color]} 
            `
    } else if ($variant === 'text') {
      return `
            background:transparent;
            color: ${({ $fontColor }) => COLOR[$fontColor]};
        `
    } else {
      return ''
    }
  }}
  &:hover {
    box-sizing: border-box;
    color: ${colors.dark};
    scale: 1.05;
    border: ${({ $fontColor }) => `1px ${COLOR[$fontColor]} solid`};
  }
`
export default Button
