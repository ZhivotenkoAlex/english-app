import LetterCell from '@/components/__molecules__/LetterCell/LetterCell'
import { themeColors } from '@/lib/theme'
import { IWord } from '@/types'
import React from 'react'
import styled from 'styled-components'

interface IExerciseContent {
  word: IWord
}

function ExerciseContent({ word }: IExerciseContent) {
  return (
    <Wrapper>
      <h2>{word.translation}</h2>
      <p>Create a word from the letters</p>
      <CellsRow>
        {word.title.split('').map((char, index) => (
          <LetterCell key={index} type={'outlined'} background={themeColors.gray} />
        ))}
      </CellsRow>
      <CellsRow>
        {word.title.split('').map((char, index) => (
          <LetterCell
            clickable
            key={index}
            char={char}
            background={themeColors.primary}
            type={'contained'}
          />
        ))}
      </CellsRow>
    </Wrapper>
  )
}

const CellsRow = styled('div')`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 80%;
`

const Wrapper = styled.div`
  border: 2px solid ${themeColors.gray};
  padding: 3rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export default ExerciseContent
