'use client'
import React from 'react'
import styled from 'styled-components'
import LessonItem from '../features/LessonItem'
import { Lessons } from '@/helpers/constants'

export default function LessonsPage() {
  return (
    <Root>
      <Heading>
        <PageTitle>Обери урок</PageTitle>
      </Heading>
      <ContentContainer>
        {Lessons.map(item => (
          <LessonItem key={item.id} data={item} />
        ))}
      </ContentContainer>
    </Root>
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
`

const PageTitle = styled.h1`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  margin: 0 auto;
  width: 75%;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 75%;
  margin: 0 auto 20px auto;
  gap: 25px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
