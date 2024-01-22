// import { useEffect, useState } from 'react'
import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import { Typography } from '@mui/material'
import ClientOnlyProvider from '../../components/features/ClientOnlyProvider/ClientOnlyProvider'
import GrammarClient from './GrammarClient'
function Grammar() {
  // const [location, setLocation] = useState('')

  // useEffect(() => {
  //   setLocation(window?.location?.origin)
  // }, [])
  // const ogData = {
  //   image: `${location}/public/images/logo.png`,
  //   title: 'Grammar | EasyWay',
  //   description: 'Easy way to learn English',
  //   type: 'website',
  //   url: location,
  // }

  return (
    <ClientOnlyProvider>
      <PageContainer>
        <GrammarClient />
      </PageContainer>
    </ClientOnlyProvider>
  )
}

export default Grammar
