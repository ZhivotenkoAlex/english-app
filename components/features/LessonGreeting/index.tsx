import { COLORS_ENUM, colors } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Button from '@/components/molecules/Button/Button'
import Link from 'next/link'
import ROUTES from '@/helpers/routes'
import { LessonType } from '@/types'

type PropType = {
  lesson: LessonType
}

export default function LessonGreeting({ lesson }: PropType) {
  const { imageName, topic } = lesson
  return (
    <Root>
      <Title>Вітаю</Title>
      <Subtitle>Ви вивчили 15 нових слів на тему {topic}</Subtitle>
      <StyledImage
        src={`/images/lessons/${imageName}.jpg`}
        alt="word cloud"
        width={200}
        height={140}
      />
      <Text>15 слів, наче й не багато!</Text>

      <Text>
        Але якщо вивчати урок за уроком то з кожним пройденим уроком, рівень вашої англійської буде
        все вище!
      </Text>
      <Text>Тепер бажано відпочити та зі свіжими силами до наступного уроку!</Text>
      <ButtonContainer>
        <Link href={ROUTES.DASHBOARD}>
          <StyledButton label={'Home page'} color={COLORS_ENUM.GREEN} variant="contained" />
        </Link>
        <Link href={ROUTES.LESSONS}>
          <StyledButton label={'Lessons'} color={COLORS_ENUM.GREEN} variant="contained" />
        </Link>
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  gap: 10px;
  margin: 0 auto;
  padding: 16px;
  border: ${colors.lightGrey2} 1px solid;
  border-radius: 15px;
  text-align: center;
  background: ${colors.extraLightGreen};
  min-height: 500px;
  width: 50%;
  position: relative;
  justify-content: center;
  @media screen and (max-width: 767px) {
    min-height: 550px;
    width: 100%;
  }
`

const Title = styled.h3``

const Subtitle = styled.h4``

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: fit;
  filter: grayscale(20%);
  min-width: 30%;
  max-width: 100%;
  margin: 0 auto;
`
const Text = styled.p``

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledButton = styled(Button)``
