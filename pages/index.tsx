import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Title from '@/components/__features__/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    setLocation(window?.location?.origin)
  }, [])

  const ogData = {
    image: `${location}/public/images/logo.png`,
    title: 'EasyWay | Welcome Page',
    description:
      'Easy way to learn English',
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
      <main >
        <div>
          <p>main page</p>
        </div>
      </main>
    </>
  )
}
