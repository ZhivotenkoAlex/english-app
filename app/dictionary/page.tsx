import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'
import ClientOnlyProvider from '@/components/__features__/ClientOnlyProvider/ClientOnlyProvider'
import EmptyState from '@/components/__features__/EmptyState/EmptyState'
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
