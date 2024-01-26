import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import ClientOnlyProvider from '@/components/features/ClientOnlyProvider/ClientOnlyProvider'
import EmptyState from '@/components/features/EmptyState/EmptyState'
import DictionaryClient from './DictionaryClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'Easy way to learn English',
}

function Dictionary() {
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
        <DictionaryClient />
      </PageContainer>
    </ClientOnlyProvider>
  )
}

export default Dictionary
