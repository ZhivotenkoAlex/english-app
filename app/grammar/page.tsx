import { Metadata } from 'next'
import GrammarPage from '@/components/pages/GrammarPage'

export const metadata: Metadata = {
  title: 'Grammar',
  description: 'Easy way to learn English',
}

function Grammar() {
  return <GrammarPage />
}

export default Grammar
