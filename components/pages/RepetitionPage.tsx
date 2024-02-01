'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import ExerciseStatistics from '../features/ExerciseStatistics/ExerciseStatistics'
import RepetitionContent from '../features/RepetitionContent/RepetitionContent'
import { WORDS } from '@/helpers/mock-data'
import ResultModal from '../features/ResultModal/ResultModal'
import { IWord } from '@/types'
import StartTimer from '../features/StartTimer'
import { getVoice } from '@/helpers/getVoice'

function Repetition() {
  const [isStarted, setStarted] = useState(false)
  const [isPronunciation, setIsPronunciation] = useState(true)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const words = WORDS
  const [wrongWords, setWrongWords] = useState<IWord[]>([])
  const [isFinished, setIsFinished] = useState(false)

  const learnedWords = useMemo(() => words.filter(el => !wrongWords.includes(el)), [wrongWords])

  const handleTimerOut = () => {
    setStarted(true)
  }

  const handleStarted = () => setStarted(false)

  const handleAddWrongWords = (wordItem: IWord) => setWrongWords(prev => [...prev, wordItem])

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
    setActiveIndex(0)
    handleStarted()
  }

  const handleTogglePronunciation = () => {
    setIsPronunciation(!isPronunciation)
  }

  useEffect(() => {
    if (isStarted) {
      getVoice(words[activeIndex].title, 0.8)
    }
  }, [activeIndex, isStarted])

  if (!isStarted) {
    return <StartTimer handleTimerOut={handleTimerOut} />
  }
  return isFinished ? (
    <ResultModal handleRepeat={handleRepeat} wrongWords={wrongWords} learnedWords={learnedWords} />
  ) : (
    <Root>
      <Wrapper>
        <ExerciseStatistics
          isPronunciation={isPronunciation}
          amountOfWords={words.length}
          exercisedAmount={activeIndex + 1}
          handleTogglePronunciation={handleTogglePronunciation}
        />
        <RepetitionContent
          words={words}
          currentWord={words[activeIndex]}
          handleAddWrongWords={handleAddWrongWords}
          setActiveIndex={setActiveIndex}
          setIsFinished={setIsFinished}
        />
      </Wrapper>
    </Root>
  )
}
const Root = styled('div')`
  display: flex;
  justify-content: center;
`
const Wrapper = styled('div')`
  display: flex;
  width: 60%;
  flex-direction: column;
`
export default Repetition
