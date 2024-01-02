import WelcomePage from '@/components/pages/WelcomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EasyWay | Welcome Page',
  description: 'Easy way to learn English',
}

export default function Home() {
  return (
    <>
      <WelcomePage />
    </>
  )
}
