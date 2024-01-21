import ExerciseStatistics from '@/components/__features__/ExerciseStatistics/ExerciseStatistics'
import React from 'react'
import styled from 'styled-components'
import ExerciseContent from './ExerciseContent'
import ExerciseControlsButtons from '@/components/__features__/ExerciseControlsButtons/ExerciseControlsButtons'

function Exercise() {
  const word = {
    id: 1,
    title: 'apple',
    translation: 'яблуко',
    picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
    state: 'in progress',
  }
  return (
    <Wrapper>
      <ExerciseStatistics isPronunciation amountOfWords={10} exercisedAmount={2} />
      <ExerciseContent word={word} />
      <ExerciseControlsButtons />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`
export default Exercise
