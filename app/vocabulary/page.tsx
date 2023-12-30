'use client'
import PageContainer from '../../components/__atoms__/PageContainer/PageContainer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'

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
  return (
    <PageContainer>
      <Typography variant="h1">Vocabulary</Typography>
      <Image
        src="/images/forest-background.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </PageContainer>
  )
}

export default Vocabulary
