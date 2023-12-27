import Title from '@/components/__features__/Title'
import FullScreenWrapper from '../../components/__atoms__/FullScreenWrapper/FullScreenWrapper'
import LoginModal from '../../components/__features__/LoginModal/LoginModal'

function LoginPage() {
  return (
    <FullScreenWrapper>
      <Title title="Sign in to your account | EasyWay" />
      <LoginModal />
    </FullScreenWrapper>
  )
}

export default LoginPage
