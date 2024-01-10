import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'
import ClientOnlyProvider from '@/components/__features__/ClientOnlyProvider/ClientOnlyProvider'
import VocabularyClient from './VocabularyClient'
import EmptyState from '@/components/__features__/EmptyState/EmptyState'

function Vocabulary() {
  // const [location, setLocation] = useState("")

  // useEffect(() => {
  //   setLocation(window?.location?.origin)
  // }, [])
  // const ogData = {
  //   image: `${location}/public/images/logo.png`,
  //   title: "Vocabulary | EasyWay",
  //   description: "Easy way to learn English",
  //   type: "website",
  //   url: location,
  // }

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
