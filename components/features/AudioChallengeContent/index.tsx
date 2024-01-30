import React, { useMemo, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal'
import { forestData } from '@/helpers/forestData'
import { IForestItem } from '@/types'
import AudioChallenge from '../AudioChallenge'

export default function AudioChallengeContent() {
  const [wrongWords, setWrongWords] = useState<IForestItem[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const handleWrongWords = (wordItem: IForestItem) =>
    setWrongWords(prev => [...prev, wordItem] as never)
  const learnedWords = useMemo(
    () => forestData.filter(el => !wrongWords.includes(el)) as IForestItem[],
    [wrongWords],
  )

  const handleRepeat = () => {
    setIsFinished(false)
    setWrongWords([])
  }
  return isFinished ? (
    <ResultModal handleRepeat={handleRepeat} wrongWords={wrongWords} learnedWords={learnedWords} />
  ) : (
    <AudioChallenge
      forestData={forestData}
      handleProgress={setIsFinished}
      handleWrongWords={handleWrongWords}
    />
  )
}
