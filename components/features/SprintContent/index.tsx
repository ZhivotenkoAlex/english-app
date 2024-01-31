import React, { useMemo, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import { forestData } from '@/helpers/forestData'
import { IForestItem } from '@/types'
import SprintExercise from '../SprintExercise'

type PropTypes = {
  handleStarted: () => void
}

export default function SprintContent({ handleStarted }: PropTypes) {
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
    <SprintExercise
      forestData={forestData}
      handleProgress={setIsFinished}
      handleWrongWords={handleWrongWords}
    />
  )
}
