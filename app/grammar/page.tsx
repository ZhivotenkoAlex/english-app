// import { useEffect, useState } from 'react'
import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'
import { Typography } from '@mui/material'

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
    <>
      <PageContainer>
        <Typography variant="h1">Grammar</Typography>
      </PageContainer>
    </>
  )
}

export default Grammar
