import ArticlesPage from '@/components/pages/ArticlesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary | Articles',
  description: 'Easy way to learn English',
}

export default function Articles() {
  return <ArticlesPage />
}
