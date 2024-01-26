import WordsList from '@/app/dictionary/WordsList'
import Heading from '@/components/atoms/Heading/Heading'
import { IWord } from '@/types'
import React from 'react'
import SimpleWordsList from './SimpleWordsList'
import { Typography } from '@mui/material'
import styled from 'styled-components'

interface IResultWordsList {
  learnedWords?: IWord[]
  wrongWords?: IWord[]
}
function ResultWordsList({ learnedWords, wrongWords }: IResultWordsList) {
  return (
    <Wrapper>
      {wrongWords?.length ? (
        <div>
          <Typography
            color="red"
            variant={'subtitle4'}
          >{`${wrongWords.length} з помилками`}</Typography>
          <SimpleWordsList words={wrongWords} />
        </div>
      ) : null}
      {learnedWords?.length ? (
        <div>
          <Typography color="green" variant={'subtitle4'}>
            {`${learnedWords.length} вивчено`}{' '}
          </Typography>
          <SimpleWordsList words={learnedWords} />
        </div>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default ResultWordsList
