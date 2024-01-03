'use client'
import React from 'react'
import Statistics from './Statistics'
import ControlsRow from './ControlsRow'
import WordsList from './WordsList'

function DictionaryClient() {
  const words = [
    {
      id: 1,
      title: 'apple',
      translation: 'яблуко',
      picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
      state: 'in progress',
    },
    {
      id: 1,
      title: 'Hello world',
      translation: 'Привіт світ',
      picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
      state: 'unlearned',
    },
    {
      id: 1,
      title: 'apple',
      translation: 'яблуко',
      picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
      state: 'learned',
    },
  ]
  return (
    <div>
      <Statistics />
      <ControlsRow />
      <WordsList words={words} />
    </div>
  )
}

export default DictionaryClient
