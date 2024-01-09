import LessonsPage from '@/components/pages/LessonsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lessons',
  description: 'Easy way to learn English',
}

function Lessons() {
  return <LessonsPage />
}

export default Lessons
