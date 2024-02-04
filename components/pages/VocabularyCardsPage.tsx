'use client'
import React, { useMemo, useState } from 'react'
import ResultModal from '../features/ResultModal/ResultModal'
import { IWord } from '@/types'
import ExerciseStatistics from '../features/ExerciseStatistics/ExerciseStatistics'
import VocabularyCardsContent from '../features/VocabularyCardsContent/VocabularyCardsContent'
import styled from 'styled-components'
import { WORDS } from '@/helpers/mock-data'

function VocabularyCardsPage() {
  const words = WORDS
  const [wrongWords, setWrongWords] = useState<IWord[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isPronunciation, setIsPronunciation] = useState(true)
  const handleTogglePronunciation = () => {
    setIsPronunciation(!isPronunciation)
  }
  const learnedWords = useMemo(
    () => words.filter((el: IWord) => !wrongWords.includes(el)),
    [wrongWords],
  )

  const handleAddWrongWords = (wordItem: IWord) => setWrongWords(prev => [...prev, wordItem])

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
    setActiveIndex(0)
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
        <VocabularyCardsContent
          words={words}
          isPronunciation={isPronunciation}
          activeIndex={activeIndex}
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

export default VocabularyCardsPage
