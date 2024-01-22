import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import ClientOnlyProvider from '@/components/features/ClientOnlyProvider/ClientOnlyProvider'
import EmptyState from '@/components/features/EmptyState/EmptyState'
import DictionaryClient from './DictionaryClient'

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
