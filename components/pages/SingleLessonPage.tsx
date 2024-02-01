'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import WordLearningItem from '../features/WordLearningItem'
import CustomizedStepper from '../features/Stepper'
import WordCheckingItem from '../features/WordCheckingItem'
import { lessonsSubtitles } from '@/helpers/constants'
import PracticeItem from '../features/PracticeTypeItem'
import LessonGreeting from '../features/LessonGreeting'
import { LessonType } from '@/types'

type PropType = {
  lesson: LessonType
}

export default function SingleLessonPage({ lesson }: PropType) {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const clickHandler = () => setCurrentStep(prev => prev + 1)
  const stepClickHandler = (step: React.SetStateAction<number>) => setCurrentStep(step)

  const stepComponents = {
    0: (
      <WordLearningItem vocabulary={lesson.lessonContent.vocabulary} clickHandler={clickHandler} />
    ),
    1: (
      <WordCheckingItem vocabulary={lesson.lessonContent.vocabulary} clickHandler={clickHandler} />
    ),
    2: <PracticeItem practice={lesson.lessonContent.practice} clickHandler={clickHandler} />,
    3: <LessonGreeting lesson={lesson} />,
  }

  return (
    <Root>
      <CustomizedStepper currentStep={currentStep} clickHandler={stepClickHandler} />
      <Container>
        <Heading>
          <PageTitle>{lesson?.topic}</PageTitle>
        </Heading>
        <SubTitle>{lessonsSubtitles[currentStep]}</SubTitle>
        {stepComponents[currentStep]}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: radial-gradient(90% 70% at 50% 50%, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    url('/images/homeBackground.webp');
  padding-bottom: 40px;
`

const SubTitle = styled.h3`
  display: block;
  text-align: center;
  margin: 0 auto 40px auto;
`

const Heading = styled.div`
  margin: 40px auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const PageTitle = styled.h1`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  margin: 0 auto;
  text-wrap: nowrap;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`
