import React, { useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import ForestExercise from '../ForestExercise'
import { forestData } from '@/helpers/forestData'

export default function ForestContent(handleStarted) {
  const [wrongWords, setWrongWords] = useState<any>([])
  const [isFinished, setIsFinished] = useState(false)
  const handleWrongWords = (wordItem: any) => setWrongWords(prev => [...prev, wordItem] as never)
  const learnedWords = forestData.filter(el => !wrongWords.includes(el))

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
    handleStarted(false)
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
