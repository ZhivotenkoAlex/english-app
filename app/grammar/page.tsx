import { Metadata } from 'next'
import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import ClientOnlyProvider from '../../components/features/ClientOnlyProvider/ClientOnlyProvider'
import GrammarClient from './GrammarClient'

export const metadata: Metadata = {
  title: 'Grammar',
  description: 'Easy way to learn English',
}

function Grammar() {
  return (
    <ClientOnlyProvider>
      <PageContainer>
        <GrammarClient />
      </PageContainer>
    </ClientOnlyProvider>
  )
}

export default Grammar
