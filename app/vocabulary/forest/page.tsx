import ForestPage from '@/components/pages/ForestPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Vocabulary | Forest',
  description: 'Easy way to learn English',
}

export default function Forest() {
  return <ForestPage />
}
