import { Inter } from 'next/font/google'
import { useCallback, useEffect, useState } from 'react'
import Title from '@/components/__features__/Title'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import Button from '@/components/__molecules__/Button/Button'
import { useRouter } from 'next/router'
import ROUTES from '@/helpers/routes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])

  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'EasyWay | Welcome Page',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }
  const router = useRouter()

  const navigateToLoginModal = useCallback(() => {
    router.push(ROUTES.SIGN_UP)
  }, [router])

  return (
    <>
      <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
      <Root>
        <Heading>
          <PageTitle variant="h1">
            EasyWay
            <SubTitle>&nbsp;the easiest way to learn English</SubTitle>
          </PageTitle>
        </Heading>
        <Container>
          <Button
            onClick={navigateToLoginModal}
            disabled={false}
            label="Start learning !"
            color={'green'}
            size="large"
          />
        </Container>
      </Root>
    </>
  )
}

const Root = styled.div`
  width: 100%;
  margin-top: 40px;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 1023px) {
    display: inline;
  }
`

const PageTitle = styled(Typography)`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  /* color: rgba(0, 0, 0, 0.6);
    background: linear-gradient(90deg, #ff991f 0%, #ff671f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  text-transform: capitalize;
`

const SubTitle = styled.span`
  display: block;
  /* background: linear-gradient(90deg, #ff1f4c 0%, #3d1fff 100%); */
  /* background: linear-gradient(to right, rgba(5, 5, 5, 0.8), rgba(61, 31, 255, 0.9));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  text-transform: capitalize;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`
