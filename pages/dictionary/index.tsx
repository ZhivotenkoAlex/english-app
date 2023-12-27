import { useEffect, useState } from 'react'
import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'

function Dictionary() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])
  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'EasyWay | Dictionary',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }

  return <PageContainer>Dictionary</PageContainer>
}

export default Dictionary
