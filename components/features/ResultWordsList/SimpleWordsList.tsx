import { themeColors } from '@/lib/theme'
import { IWord } from '@/types'
import { COLOR, COLORS_ENUM } from '@/utils/colors'
import React from 'react'
import styled from 'styled-components'

interface ISimpleWordsList {
  words: IWord[]
}

function SimpleWordsList({ words }: ISimpleWordsList) {
  return (
    <Wrapper>
      {words.map(word => (
        <Row key={word.id}>
          <Word>{word.title}</Word>
          <p>{word.translation}</p>
        </Row>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`

const Word = styled('p')`
  font-size: 1.2rem;
  color: ${COLOR[COLORS_ENUM.BLUE]};
`

export default SimpleWordsList
