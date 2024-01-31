import ExerciseStatistics from '@/components/features/ExerciseStatistics/ExerciseStatistics'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import ExerciseContent from './ExerciseContent'
import { IWord } from '@/types'
import ResultModal from '@/components/features/ResultModal/ResultModal'
import ExerciseControlsButtons from '@/components/features/ExerciseControlsButtons/ExerciseControlsButtons'
import { WORDS } from '@/helpers/mock-data'

function Exercise() {
  const [isPronunciation, setIsPronunciation] = useState(true)
  const [isInProgress, setIsInProgress] = useState(true)
  const [isResultModalShown, setIsResultModalShown] = useState(false)
  const [wrongWords, setWrongWords] = useState<IWord[]>([])
  const words = WORDS
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)

  const learnedWords = useMemo(
    () => words.filter(el => !wrongWords.includes(el)),
    [wrongWords, words],
  )
  const handleTogglePronunciation = () => {
    setIsPronunciation(!isPronunciation)
  }

  const handleNextWord = () => {
    if (currentWordIndex === words.length - 1) {
      setIsResultModalShown(true)
      return
    }
    setCurrentWordIndex(currentWordIndex + 1)
    setIsInProgress(true)
  }

  const addWrongWord = (word: IWord) => {
    const newArr = [...new Set([...wrongWords, word])]
    setWrongWords(newArr)
  }
  const handleSkipWord = () => {
    const newArr = [...new Set([...wrongWords, words[currentWordIndex]])]
    setWrongWords(newArr)
    setIsInProgress(false)
  }

  const handleRepeat = () => {
    setIsResultModalShown(false)
    setCurrentWordIndex(0)
    setIsInProgress(true)
    // dispatch(getNewWords);
  }

  if (!words) {
    return <>Loading...</>
  }
  return (
    <Wrapper>
      {isResultModalShown ? (
        <ResultModal
          handleRepeat={handleRepeat}
          wrongWords={wrongWords}
          learnedWords={learnedWords}
        />
      ) : (
        <>
          <ExerciseStatistics
            isPronunciation={isPronunciation}
            amountOfWords={words.length}
            exercisedAmount={currentWordIndex + 1}
            handleTogglePronunciation={handleTogglePronunciation}
          />
          <ExerciseContent
            addWrongWord={addWrongWord}
            word={words[currentWordIndex]}
            isPronunciation={isPronunciation}
            exerciseInProgress={isInProgress}
            setIsExerciseInProgress={setIsInProgress}
          />
          <ExerciseControlsButtons
            handleSkipWord={handleSkipWord}
            handleNextWord={handleNextWord}
            exerciseInProgress={isInProgress}
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`
export default Exercise
