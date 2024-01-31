import React, { useMemo, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import { forestData } from '@/helpers/forestData'
import { IForestItem } from '@/types'
import SprintExercise from '../SprintExercise'

type PropTypes = {
  handleStarted: () => void
}

export default function SprintContent({ handleStarted }: PropTypes) {
  const [isFinished, setIsFinished] = useState(false)
  const [learnedWords, setLearnedWords] = useState<IForestItem[]>([])

  const handleLearnedWords = (wordItem: IForestItem) =>
    setLearnedWords(prev => [...prev, wordItem] as never)

  const wrongWords = useMemo(
    () => forestData.filter(el => !learnedWords.includes(el)) as IForestItem[],
    [learnedWords],
  )

  const handleRepeat = () => {
    setIsFinished(false)
    setLearnedWords([])
    handleStarted()
  }
  return isFinished ? (
    <ResultModal handleRepeat={handleRepeat} wrongWords={wrongWords} learnedWords={learnedWords} />
  ) : (
    <SprintExercise
      forestData={forestData}
      handleProgress={setIsFinished}
      handleLearnedWords={handleLearnedWords}
    />
  )
}
