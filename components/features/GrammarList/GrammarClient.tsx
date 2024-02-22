'use client'
import React from 'react'
import GrammarSection from './GrammarSection'
import styled from 'styled-components'
import { useSuspenseQuery } from '@apollo/client'
import { GET_GRAMMAR_LIST } from '@/apollo/queries/grammar'

function GrammarClient() {
  const { data } = useSuspenseQuery(GET_GRAMMAR_LIST)

  return (
    <Wrapper>
      {data.getAllGrammars.map(grammar => (
        <GrammarSection key={grammar.id} grammar={grammar} />
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
