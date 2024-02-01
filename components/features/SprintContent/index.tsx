import React, { useMemo, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import { forestData as sprintData } from '@/helpers/forestData'
import { IForestItem } from '@/types'
import SprintExercise from '../SprintExercise'

type ISprintItem = IForestItem

type PropTypes = {
  handleStarted: () => void
}

export default function SprintContent({ handleStarted }: PropTypes) {
  const [isFinished, setIsFinished] = useState(false)
  const [learnedWords, setLearnedWords] = useState<ISprintItem[]>([])

  const handleLearnedWords = (wordItem: ISprintItem) =>
    setLearnedWords(prev => [...prev, wordItem] as never)

  const wrongWords = useMemo(
    () => sprintData.filter(el => !learnedWords.includes(el)) as ISprintItem[],
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
      sprintData={sprintData}
      handleProgress={setIsFinished}
      handleLearnedWords={handleLearnedWords}
    />
  )
}
