import { useCallback } from 'react'
import Button from '../Button/Button'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import ROUTES from '@/helpers/routes'

function BackButton() {
  const router = useRouter()

  const handleNavigateToDashboard = useCallback(() => {
    router.push(ROUTES.HOME)
  }, [router])

  return (
    <BackButtonWrapper>
      <Button
        disabled={false}
        label="Back"
        color="green"
        type="outlined"
        onClick={handleNavigateToDashboard}
        size="small"
      />
    </BackButtonWrapper>
  )
}

const BackButtonWrapper = styled.div`
  button {
    width: auto;
  }
`

export default BackButton
