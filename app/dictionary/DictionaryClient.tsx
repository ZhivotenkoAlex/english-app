'use client'
import React, { useMemo } from 'react'
import Statistics from './Statistics'
import ControlsRow from './ControlsRow'
import WordsList from './WordsList'
import { WORDS } from '@/helpers/mock-data'

function DictionaryClient() {
  const words = useMemo(() => WORDS, [])
  return (
    <div>
      <Statistics />
      <ControlsRow />
      <WordsList words={words} />
    </div>
  )
}

export default DictionaryClient
