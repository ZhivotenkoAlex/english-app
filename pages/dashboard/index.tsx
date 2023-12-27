import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/__molecules__/Button/Button'
import styled from 'styled-components'
import Title from '@/components/__features__/Title'

function Dashboard() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])
  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'EasyWay | Grammar',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }
  const router = useRouter()

  const navigateToLoginModal = useCallback(() => {
    router.push('/login')
  }, [router])
  return (
    <Wrapper>
      <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
      <Button
        onClick={navigateToLoginModal}
        disabled={false}
        label="Start learning !"
        color={'green'}
        size="large"
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 2rem;
`
export default Dashboard
