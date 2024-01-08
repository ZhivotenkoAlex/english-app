import { Button, ButtonTypeMap, styled } from '@mui/material'

type PropTypes = {
  type: 'text' | 'outlined' | 'contained'
  label: string
  disabled: boolean
  onClick: () => void
  size: 'small' | 'medium' | 'large'
}

function MainButton({ type = 'contained', label, disabled, onClick, size = 'medium' }: PropTypes) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={'success'}
      variant={type}
    >
      {label}
    </StyledButton>
  )
}

export default MainButton

const StyledButton = styled(Button)`
  && {
    background-color: #28c38a;
  }
`
