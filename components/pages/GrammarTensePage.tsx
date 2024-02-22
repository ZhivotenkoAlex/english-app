'use client'
import React, { useMemo, useState } from 'react'
import PageContainer from '../atoms/PageContainer/PageContainer'
import ResultModal from '../features/ResultModal/ResultModal'
import { LessonVocabulary } from '@/types'
import GrammarTenseContent from '../features/GrammarTenseContent'
import ROUTES from '@/helpers/routes'
import { useSuspenseQuery } from '@apollo/client'
import { GRAMMAR_BY_SLUG } from '@/apollo/queries/grammar'

type PropTypes = {
  slug: string
}

export default function GrammarTensePage({ slug }: PropTypes) {
  const { data } = useSuspenseQuery(GRAMMAR_BY_SLUG, {
    variables: {
      slug,
    },
  })

  const grammarData = data.getGrammarBySlug.exercises

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
    () => grammarData?.filter(el => !wrongWords.includes(el as never)) as never,
    [grammarData, wrongWords],
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
          data={grammarData}
          handleFinish={handleFinish}
          handleWrongWords={handleWrongWords}
        />
      )}
    </PageContainer>
  )
}
