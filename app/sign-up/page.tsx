'use client'
import { Suspense } from 'react'
import FullScreenWrapper from '../../components/__atoms__/FullScreenWrapper/FullScreenWrapper'
import RegistrationModal from '../../components/__features__/RegistrationModal/RegistrationModal'

function RegistrationPage() {
  return (
    <Suspense>
      <FullScreenWrapper>
        {/* <Title title="Register on SuperbCompanies | EasyWay" /> */}
        <RegistrationModal />
      </FullScreenWrapper>
    </Suspense>
  )
}

export default RegistrationPage
