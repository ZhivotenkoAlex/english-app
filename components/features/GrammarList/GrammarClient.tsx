'use client'
import React from 'react'
import GrammarSection from './GrammarSection'
import { GRAMMAR_LEVELS } from '@/helpers/grammarExcercises'
import styled from 'styled-components'

function GrammarClient() {
  return (
    <Wrapper>
      {GRAMMAR_LEVELS.map(level => (
        <GrammarSection key={level.level} level={level} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export default GrammarClient
