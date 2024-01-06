'use client'
import React from 'react'
import styled from 'styled-components'
import WordCheckingItem from '../__features__/WordCheckingItem'

export default function WordsChecking({ lesson }: any) {
  return (
    <Root>
      <Container>
        <SubTitle>А зараз перевіримо знання нових слів</SubTitle>
        <WordCheckingItem vocabulary={lesson.lessonContent.vocabulary} slug={lesson.slug} />
      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
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
