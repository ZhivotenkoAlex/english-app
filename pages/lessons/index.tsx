import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/__molecules__/Button/Button'
import styled from 'styled-components'
import Title from '@/components/__features__/Title'
import { Typography } from '@mui/material'
import ROUTES from '@/helpers/routes'

function Dashboard() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])
  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'Lessons | EasyWay',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }
  const router = useRouter()

  const navigateToLoginModal = useCallback(() => {
    router.push(ROUTES.SIGN_UP)
  }, [router])
  return (
    <Wrapper>
      <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
      <Typography variant="h1">Lessons</Typography>
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
