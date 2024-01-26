import PageContainer from '@/components/atoms/PageContainer/PageContainer'
import React from 'react'
import WordBuilderClient from './WordBuilderClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary | WordBuilder',
  description: 'Easy way to learn English',
}

function WordBuilder() {
  return (
    <PageContainer>
      <WordBuilderClient />
    </PageContainer>
  )
}

export default WordBuilder
