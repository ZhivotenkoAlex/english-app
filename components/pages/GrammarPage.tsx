import React from 'react'
import ClientOnlyProvider from '../features/ClientOnlyProvider/ClientOnlyProvider'
import PageContainer from '../atoms/PageContainer/PageContainer'
import GrammarClient from '@/components/features/GrammarList/GrammarClient'

export default function GrammarPage() {
  return (
    <ClientOnlyProvider>
      <PageContainer>
        <GrammarClient />
      </PageContainer>
    </ClientOnlyProvider>
  )
}
