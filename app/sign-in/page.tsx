'use client'
import FullScreenWrapper from '../../components/atoms/FullScreenWrapper/FullScreenWrapper'
import LoginModal from '../../components/features/LoginModal/LoginModal'

function LoginPage() {
  return (
    <FullScreenWrapper>
      {/* <Title title="Sign in to your account | EasyWay" /> */}
      <LoginModal />
    </FullScreenWrapper>
  )
}

export default LoginPage
