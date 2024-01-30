'use client'
import React, { useMemo, useState } from 'react'
import PageContainer from '../atoms/PageContainer/PageContainer'
import Listening from '../features/Listening'
import { Lessons } from '@/helpers/constants'
import ResultModal from '../features/ResultModal/ResultModal'
import { LessonVocabulary } from '@/types'

export default function ListeningPage() {
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState([])
  const vocabulary = Lessons[0].lessonContent.vocabulary

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: LessonVocabulary) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  const learnedWords = useMemo(
    () => vocabulary.filter(el => !wrongWords.includes(el as never)) as never,
    [vocabulary, wrongWords],
  )

  return (
    <PageContainer>
      {isFinished ? (
        <ResultModal
          handleRepeat={handleRepeat}
          wrongWords={wrongWords}
          learnedWords={learnedWords}
        />
      ) : (
        <Listening
          vocabulary={vocabulary}
          handleFinish={handleFinish}
          handleWrongWords={handleWrongWords}
        />
      )}
    </PageContainer>
  )
}
