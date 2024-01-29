'use client'
import { Lessons } from '@/helpers/constants'
import { PracticeTypes } from '@/types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PracticeItem from '../features/PracticeItem'
import ResultModal from '../features/ResultModal/ResultModal'

const getTasks = () =>
  Lessons.map(lesson =>
    lesson.lessonContent.practice.filter(item => item.type === PracticeTypes.CONSTRUCT),
  ).flat(1)

export default function SentenceBuilderPage() {
  const tasks = getTasks()
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState<any[]>([])

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: any) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  const learnedWords = tasks.filter(el => !tasks.includes(el)) as any[]

  return isFinished ? (
    <ResultModal handleRepeat={handleRepeat} wrongWords={wrongWords} learnedWords={learnedWords} />
  ) : (
    <PracticeItem
      practice={tasks}
      clickHandler={handleFinish}
      handleWrongWords={handleWrongWords}
    />
  )
}
