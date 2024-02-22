'use client'
import React, { useEffect, useMemo, useState } from 'react'
import PageContainer from '../atoms/PageContainer/PageContainer'
import ResultModal from '../features/ResultModal/ResultModal'
import { LessonVocabulary } from '@/types'
import GrammarTenseContent from '../features/GrammarTenseContent'
import ROUTES from '@/helpers/routes'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { GRAMMAR_BY_SLUG } from '@/apollo/queries/grammar'
import { UPDATE_STATUS } from '@/apollo/mutations/grammar'
import { ExerciseStatus } from '@/helpers/resultStatuses'

type PropTypes = {
  slug: string
}

export default function GrammarTensePage({ slug }: PropTypes) {
  const [setStatus] = useMutation(UPDATE_STATUS)
  const { data, error } = useSuspenseQuery(GRAMMAR_BY_SLUG, {
    variables: {
      slug,
    },
  })

  const { exercises: grammarData, id } = data.getGrammarBySlug

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

  const exerciseStatus =
    isFinished && wrongWords.length === 0 ? ExerciseStatus.DONE : ExerciseStatus.IN_PROGRESS

  useEffect(() => {
    setStatus({
      variables: {
        id: id,
        status: exerciseStatus,
      },
    })
  }, [exerciseStatus, id, setStatus])

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
