import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Title from '@/components/__features__/Title'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])

  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'EasyWay | Welcome Page',
    description: 'Easy way to learn English',
    type: 'website',
    url: location,
  }

  return (
    <>
      <Title
        title={ogData.title}
        description={ogData.description}
        canonical={ogData.url}
        ogData={ogData}
      />
      <Root>
        <p>main page</p>
        <Typography variant="body2-light">Hello</Typography>
      </Root>
    </>
  )
}

const Root = styled.div`
  width: 100%;
`
