'use client'
import { Lessons } from '@/helpers/constants'
import { LessonPractice, PracticeTypes } from '@/types'
import React, { useMemo, useState } from 'react'
import PracticeItem from '../features/PracticeTypeItem'
import ResultModal from '../features/ResultModal/ResultModal'

const getTasks = () =>
  Lessons.map(lesson =>
    lesson.lessonContent.practice.filter(item => item.type === PracticeTypes.CONSTRUCT),
  ).flat(1)

export default function SentenceBuilderPage() {
  const tasks = getTasks()
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState([])

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: LessonPractice) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  const learnedWords = useMemo(
    () => tasks.filter(el => !wrongWords.includes(el as never)) as never,
    [tasks, wrongWords],
  )

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
