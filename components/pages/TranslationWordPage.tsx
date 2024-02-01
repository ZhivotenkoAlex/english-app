'use client'
import { ITranslationWord } from '@/types'
import React, { useEffect, useMemo, useState } from 'react'
import ResultModal from '../features/ResultModal/ResultModal'
import { translationWordData } from '@/helpers/translationWordData'
import TranslationWordExercise from '../features/TranslationWordExercise'
import PageContainer from '../atoms/PageContainer/PageContainer'
import { shuffleArray } from '@/helpers/shuffleArray'

const getData = async () => {
  let result: ITranslationWord[] = []
  translationWordData.forEach(item => {
    result.push({ ...item, variants: shuffleArray(item.variants) })
  })
  return shuffleArray(result)
}

export default function TranslationWordPage() {
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState([])
  const [data, setData] = useState<ITranslationWord[]>([])

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  const handleFinish = () => setIsFinished(true)
  const handleWrongWords = (wordItem: ITranslationWord) => {
    setWrongWords([...new Set([...wrongWords, wordItem])] as never)
  }

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }

  const learnedWords = useMemo(
    () => data?.filter(el => !wrongWords.includes(el as never)) as never,
    [data, wrongWords],
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
        <TranslationWordExercise
          data={data}
          handleFinish={handleFinish}
          handleWrongWords={handleWrongWords}
        />
      )}
    </PageContainer>
  )
}
