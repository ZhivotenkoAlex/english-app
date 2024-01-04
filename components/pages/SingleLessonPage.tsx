'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import WordLearningItem from '../__features__/WordLearningItem'

export default function SingleLessonPage({ lesson }: any) {
  return (
    <Root>
      <Heading>
        <StyledImage
          src={`/images/lessons/${lesson.imageName}.jpg`}
          alt="word cloud"
          width={200}
          height={200}
        />
        <PageTitle>{lesson.topic}</PageTitle>
      </Heading>
      <Container>
        <SubTitle>Для початку вивчимо кілька нових слів</SubTitle>
        <WordLearningItem vocabulary={lesson.lessonContent.vocabulary} slug={lesson.slug} />
      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`

const Heading = styled.div`
  margin: 0 auto;
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
  text-wrap: nowrap;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: fit;
  filter: grayscale(20%);
  height: 100%;
  margin-bottom: 20px;
`

const Container = styled.div`
  display: grid;
  justify-content: center;
`

const SubTitle = styled.h3`
  display: block;
  margin-bottom: 40px;
  text-align: center;
`
