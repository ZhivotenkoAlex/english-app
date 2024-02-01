import { Metadata } from 'next'
import PageContainer from '../../components/atoms/PageContainer/PageContainer'
import ClientOnlyProvider from '../../components/features/ClientOnlyProvider/ClientOnlyProvider'
import GrammarClient from '../../components/features/GrammarList/GrammarClient'
import GrammarPage from '@/components/pages/GrammarPage'

export const metadata: Metadata = {
  title: 'Grammar',
  description: 'Easy way to learn English',
}

function Grammar() {
  return <GrammarPage />
}

export default Grammar
