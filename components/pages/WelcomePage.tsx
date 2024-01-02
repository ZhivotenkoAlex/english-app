'use client'
import styled from 'styled-components'
import Button from '@/components/__molecules__/Button/Button'
import ROUTES from '@/helpers/routes'
import ServiceItem from '@/components/__features__/ServiceItem'
import { WelcomePagePreferences } from '@/helpers/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <>
      <Root>
        <Heading>
          <PageTitle>
            EasyWay
            <SubTitle>&nbsp;найлегший шлях вивчити англійську</SubTitle>
          </PageTitle>
        </Heading>
        <ButtonLink href={ROUTES.SIGN_UP}>
          <Button disabled={false} label="Почати вчити!" color={'green'} size="large" />
        </ButtonLink>
        <PreferencesContainer>
          <DescriptionTitle>З нами ви навчитесь:</DescriptionTitle>
          <ItemsContainer>
            {WelcomePagePreferences.map(item => (
              <ServiceItem key={item.id} data={item} />
            ))}
          </ItemsContainer>
        </PreferencesContainer>
        <WelcomeContainer>
          <WelcomeTitleContainer>
            <WelcomeTitle>Підвищіть свій рівень англійської</WelcomeTitle>
            <WelcomeSubtitle>і відкрийте світ заново</WelcomeSubtitle>
          </WelcomeTitleContainer>
          <Button disabled={false} label="Почати вчити!" color={'green'} size="large" />
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

const PageTitle = styled.h1`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  margin: 0 auto;
  width: 75%;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`

const SubTitle = styled.span`
  display: block;
  text-transform: capitalize;
`

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: fit-content;
  margin: 0 auto 40px auto;
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
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const DescriptionTitle = styled.h2`
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

const WelcomeTitle = styled.h2``

const WelcomeSubtitle = styled.h3``

const WelcomeTitleContainer = styled.div`
  text-align: center;
  margin: 30px;
`
