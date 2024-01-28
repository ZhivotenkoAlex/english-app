import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import ClientOnlyProvider from '@/components/features/ClientOnlyProvider/ClientOnlyProvider'
import VocabularyClient from '../../components/molecules/VocabularyClient/VocabularyClient'
import EmptyState from '@/components/features/EmptyState/EmptyState'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary',
  description: 'Easy way to learn English',
}

function Vocabulary() {
  //const currentUser = await getCurrentUser();

  const currentUser = true

  if (!currentUser) {
    return (
      <ClientOnlyProvider>
        <EmptyState title="Unauthorized" />
      </ClientOnlyProvider>
    )
  }
  return (
    <ClientOnlyProvider>
      <PageContainer>
        <VocabularyClient />
      </PageContainer>
    </ClientOnlyProvider>
  )
}

export default Vocabulary
