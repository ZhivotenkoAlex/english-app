import { useEffect, useState } from 'react'
import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'
import Title from '@/components/__features__/Title'
import { Typography } from '@mui/material'

function Grammar() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])
  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'Grammar | EasyWay',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }

  return (
    <PageContainer>
      <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
      <Typography variant="h1">Grammar</Typography>
    </PageContainer>
  )
}

export default Grammar
