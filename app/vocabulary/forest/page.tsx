import PageContainer from '@/components/atoms/PageContainer/PageContainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Vocabulary | Forest',
  description: 'Easy way to learn English',
}

export default function Forest() {
  return (
    <PageContainer>
      <div>Forest</div>
    </PageContainer>
  )
}
