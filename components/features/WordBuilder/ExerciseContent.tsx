import LetterCell from '@/components/molecules/LetterCell/LetterCell'
import { getVoice } from '@/helpers/getVoice'
import { shuffleArray } from '@/helpers/shuffleArray'
import { themeColors } from '@/lib/theme'
import { IWord } from '@/types'
import { colors } from '@/utils/colors'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

interface IExerciseContent {
  word: IWord
  isPronunciation: boolean
  exerciseInProgress: boolean
  addWrongWord: (word: IWord) => void
  setIsExerciseInProgress: (val: boolean) => void
}

function ExerciseContent({
  word,
  isPronunciation,
  exerciseInProgress,
  addWrongWord,
  setIsExerciseInProgress,
}: IExerciseContent) {
  const [initialChars, setInitialChars] = useState<
    { id: number; char: string; background: string }[]
  >([])
  const [containedCells, setContainedCells] = useState<string[]>([])

  const emptyCellsArr = useMemo(() => {
    return new Array(word.title.length - containedCells.length).fill(null)
  }, [word, containedCells])

  const handleCharClick = (char: string, index: number) => {
    //if selected char is incorrect
    if (word.title[containedCells.length] !== char) {
      addWrongWord(word)
      setInitialChars(prevChars => {
        const updatedChars = [...prevChars]
        updatedChars[index] = { ...updatedChars[index], background: 'red' }
        return updatedChars
      })

      setTimeout(() => {
        setInitialChars(prevChars => {
          const updatedChars = [...prevChars]
          updatedChars[index].background = themeColors.primary
          return updatedChars
        })
      }, 500)
    } else {
      setInitialChars(initialChars.filter((el, i) => i !== index))
      setContainedCells([...containedCells, char])
    }
  }

  useEffect(() => {
    if (isPronunciation && !exerciseInProgress) {
      getVoice(word.title, 'en', 0.8)
    }
  }, [exerciseInProgress, isPronunciation, word.title])

  useEffect(() => {
    if (containedCells.length === word.title.length) {
      setIsExerciseInProgress(false)
    }
  }, [containedCells])

  useEffect(() => {
    if (word?.title) {
      let shuffledArr = shuffleArray(word.title.split(''))
      setContainedCells([])
      setInitialChars(
        shuffledArr.map((char, i) => ({ id: i, char, background: themeColors.primary })),
      )
    }
  }, [word])

  return (
    <Wrapper>
      <h2>{word.translation}</h2>
      <p>Create a word from the letters</p>
      {exerciseInProgress ? (
        <>
          <CellsRow>
            {containedCells.map((char, index) => (
              <LetterCell key={index} type={'contained'} background={colors.green} char={char} />
            ))}
            {emptyCellsArr.map((char, index) => (
              <LetterCell key={index} type={'outlined'} background={themeColors.gray} />
            ))}
          </CellsRow>
        </>
      ) : (
        <CellsRow>
          {word.title.split('').map((el, index) => (
            <LetterCell key={index} type={'contained'} background={colors.green} char={el} />
          ))}
        </CellsRow>
      )}
      {exerciseInProgress ? (
        <CellsRow>
          {initialChars.map((elem, index) => (
            <div key={index} onClick={() => handleCharClick(elem.char, index)}>
              <LetterCell
                clickable
                key={index}
                char={elem.char}
                background={elem.background}
                type={'contained'}
              />
            </div>
          ))}
        </CellsRow>
      ) : (
        <Image src={word.picture} alt={word.title} width={150} height={150} />
      )}
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
  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }
`

export default ExerciseContent
