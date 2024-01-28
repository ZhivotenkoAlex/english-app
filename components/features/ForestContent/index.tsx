import React, { useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import ForestExercise from '../ForestExercise'
import { forestData } from '@/helpers/forestData'

type PropTypes = {
  handleStarted: () => void
}

export default function ForestContent({ handleStarted }: PropTypes) {
  const [wrongWords, setWrongWords] = useState<any>([])
  const [isFinished, setIsFinished] = useState(false)
  const handleWrongWords = (wordItem: any) => setWrongWords(prev => [...prev, wordItem] as never)
  const learnedWords = forestData.filter(el => !wrongWords.includes(el))

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
    handleStarted()
  }
  return isFinished ? (
    <ResultModal
      handleRepeat={handleRepeat}
      wrongWords={wrongWords}
      learnedWords={learnedWords as any}
    />
  ) : (
    <ForestExercise
      forestData={forestData}
      handleProgress={setIsFinished}
      handleWrongWords={handleWrongWords}
    />
  )
}
