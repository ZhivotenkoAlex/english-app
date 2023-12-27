import Title from '@/components/__features__/Title'
import FullScreenWrapper from '../../components/__atoms__/FullScreenWrapper/FullScreenWrapper'
import RegistrationModal from '../../components/__features__/RegistrationModal/RegistrationModal'

function RegistrationPage() {
  return (
    <FullScreenWrapper>
      <Title title="Register on SuperbCompanies | EasyWay" />
      <RegistrationModal />
    </FullScreenWrapper>
  )
}

export default RegistrationPage
