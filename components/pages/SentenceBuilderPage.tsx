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
  const [formattedWrongWords, setFormattedWrongWords] = useState<any[]>([])
  const [learnedWords, setLearnedWords] = useState<any[]>([])
  console.log('🚀 ~ SentenceBuilderPage ~ learnedWords:', learnedWords)

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: any) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  useEffect(() => {
    if (isFinished) {
      setFormattedWrongWords(
        wrongWords.map(item => ({
          id: item.id,
          title: item.ua,
          translation: item.en,
        })),
      )
      const learnedWords = tasks.filter(el => !formattedWrongWords.includes(el.id)) as any[]
      setLearnedWords(learnedWords)
    }
  }, [isFinished])

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  return isFinished ? (
    <ResultModal
      handleRepeat={handleRepeat}
      wrongWords={formattedWrongWords}
      learnedWords={learnedWords}
    />
  ) : (
    <PracticeItem
      practice={tasks}
      clickHandler={handleFinish}
      handleWrongWords={handleWrongWords}
    />
  )
}
