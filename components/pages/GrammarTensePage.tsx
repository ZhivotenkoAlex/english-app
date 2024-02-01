'use client'
import React, { useMemo, useState } from 'react'
import PageContainer from '../atoms/PageContainer/PageContainer'
import ResultModal from '../features/ResultModal/ResultModal'
import { LessonVocabulary } from '@/types'
import GrammarTenseContent from '../features/GrammarTenseContent'
import ROUTES from '@/helpers/routes'

export default function GrammarTensePage({ data }: any) {
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState([])

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: LessonVocabulary) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  const learnedWords = useMemo(
    () => data.filter(el => !wrongWords.includes(el as never)) as never,
    [data, wrongWords],
  )

  return (
    <PageContainer>
      {isFinished ? (
        <ResultModal
          onCloseTarget={ROUTES.GRAMMAR}
          handleRepeat={handleRepeat}
          wrongWords={wrongWords}
          learnedWords={learnedWords}
        />
      ) : (
        <GrammarTenseContent
          data={data}
          handleFinish={handleFinish}
          handleWrongWords={handleWrongWords}
        />
      )}
    </PageContainer>
  )
}
