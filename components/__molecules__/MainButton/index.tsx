import { Button, styled } from '@mui/material'

function MainButton({ type = 'contained', label, disabled, onClick, size = 'medium' }: any) {
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
