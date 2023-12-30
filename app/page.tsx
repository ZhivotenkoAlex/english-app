'use client'
// import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import Button from '@/components/__molecules__/Button/Button'
// import { useRouter } from 'next/router'
// import ROUTES from '@/helpers/routes'
import { getVoice } from '@/helpers/getVoice'
import ServiceItem from '@/components/__features__/ServiceItem'
import { WelcomePagePreferences } from '@/helpers/constants'
import Image from 'next/image'
import MainButton from '@/components/__molecules__/MainButton'
import Title from '@/components/__features__/Title'
// import { useEffect, useState } from 'react'

export default function Home() {
  // const [location, setLocation] = useState('')

  // useEffect(() => {
  //   setLocation(window?.location?.origin)
  // }, [])

  // const ogData = {
  //   image: `${location}/public/images/logo.png`,
  //   title: 'EasyWay | Welcome Page',
  //   description: 'Easy way to learn English',
  //   type: 'website',
  //   url: location,
  // }
  // const router = useRouter()

  const navigateToLoginModal = () => {
    getVoice('Починаємо навчання!')
    // router.push(ROUTES.SIGN_UP)
  }

  return (
    <>
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
            label="Почати вчити!"
            color={'green'}
            size="large"
          />
        </Container>
        <PreferencesContainer>
          <DescriptionTitle variant="h2">З нами ви навчитесь:</DescriptionTitle>
          <ItemsContainer>
            {WelcomePagePreferences.map(item => (
              <ServiceItem key={item.id} data={item} />
            ))}
          </ItemsContainer>
        </PreferencesContainer>
        <WelcomeContainer>
          <WelcomeTitleContainer>
            <WelcomeTitle variant="h2">Підвищіть свій рівень англійської</WelcomeTitle>
            <Typography variant="h3">і відкрийте світ заново</Typography>
          </WelcomeTitleContainer>
          <Button
            onClick={navigateToLoginModal}
            disabled={false}
            label="Почати вчити!"
            color={'green'}
            size="large"
          />
          <StyledImage src={`/images/girl.jpg`} alt="word cloud" width={300} height={400} />
        </WelcomeContainer>
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
  text-transform: capitalize;
`

const SubTitle = styled.span`
  display: block;
  text-transform: capitalize;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const PreferencesContainer = styled.div`
  margin: 0 auto 40px auto;
  max-width: 75%;
`
const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 20px;
`

const DescriptionTitle = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
`
const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: contain;
  filter: grayscale(20%);
`

const WelcomeTitle = styled(Typography)``

const WelcomeTitleContainer = styled.div`
  margin: 30px;
`
