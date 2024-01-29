'use client'
import ExerciseNameBlock from '@/components/molecules/ExerciseNameBlock/ExerciseNameBlock'
import React from 'react'
import styled from 'styled-components'
import Exercise from './Exercise'
import ExerciseCloseBlock from '@/components/molecules/ExerciseCloseBlock/ExerciseCloseBlock'

function WordBuilderClient() {
  return (
    <Wrapper>
      {/* <ExerciseNameBlock title={'Word Builder'} subtitle={'Vocabulary Training'} /> */}
      <div style={{ flex: 8 }}>
        <Exercise />
      </div>
      {/* <ExerciseCloseBlock link={'/vocabulary'} /> */}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
`

export default WordBuilderClient
