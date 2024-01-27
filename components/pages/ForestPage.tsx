'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import ForestItem from '../features/ForestItem'
import { forestData } from '@/helpers/forestData'
import ResultModal from '../features/ResultModal/ResultModal'

export default function ForestPage() {
  const [isFinished, setIsFinished] = useState(false)
  const [wrongWords, setWrongWords] = useState<any>([])
  const handleWrongWords = (wordItem: any) => setWrongWords(prev => [...prev, wordItem] as never)
  const learnedWords = forestData.filter(el => !wrongWords.includes(el))

  const handleRepeat = () => setIsFinished(false)

  return (
    <Root>
      {isFinished ? (
        <ResultModal
          handleRepeat={handleRepeat}
          wrongWords={wrongWords}
          learnedWords={learnedWords as any}
        />
      ) : (
        <ForestItem
          forestData={forestData}
          handleProgress={setIsFinished}
          handleWrongWords={handleWrongWords}
        />
      )}
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`
