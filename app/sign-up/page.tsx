'use client'
import { Suspense } from 'react'
import FullScreenWrapper from '../../components/atoms/FullScreenWrapper/FullScreenWrapper'
import RegistrationModal from '../../components/features/RegistrationModal/RegistrationModal'

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
