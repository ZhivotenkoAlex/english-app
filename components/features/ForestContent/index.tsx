import React, { useMemo, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import ForestExercise from '../ForestExercise'
import { forestData } from '@/helpers/forestData'
import { IForestItem } from '@/types'

type PropTypes = {
  handleStarted: () => void
}

export default function ForestContent({ handleStarted }: PropTypes) {
  const [wrongWords, setWrongWords] = useState<IForestItem[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const handleWrongWords = (wordItem: IForestItem) =>
    setWrongWords(prev => [...prev, wordItem] as never)
  const learnedWords = useMemo(
    () => forestData.filter(el => !wrongWords.includes(el)) as IForestItem[],
    [wrongWords],
  )

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
    handleStarted()
  }
  return isFinished ? (
    <ResultModal handleRepeat={handleRepeat} wrongWords={wrongWords} learnedWords={learnedWords} />
  ) : (
    <ForestExercise
      forestData={forestData}
      handleProgress={setIsFinished}
      handleWrongWords={handleWrongWords}
    />
  )
}
