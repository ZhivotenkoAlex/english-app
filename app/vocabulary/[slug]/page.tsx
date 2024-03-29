import ForestPage from '@/components/pages/ForestPage'
import { capitalizedWord } from '@/helpers/capitalized'
import { Metadata } from 'next'
import React from 'react'
import WordBuilderPage from '@/components/pages/WordBuilderPage'
import SentenceBuilderPage from '@/components/pages/SentenceBuilderPage'
import ListeningPage from '@/components/pages/ListeningPage'
import AudioChallengePage from '@/components/pages/AudioChallengePage'
import TranslationWordPage from '@/components/pages/TranslationWordPage'
import SprintPage from '@/components/pages/SprintPage'
import RepetitionPage from '@/components/pages/RepetitionPage'
import WordTranslationPage from '@/components/pages/WordTranslationPage'
import VocabularyCardsPage from '@/components/pages/VocabularyCardsPage'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params?.slug

  // fetch data
  const articleName = slug.replace(/_/g, ' ')
  const capitalizedName = capitalizedWord(articleName)
  return {
    title: `Vocabulary | ${capitalizedName}`,
    description: 'Easy way to learn English',
  }
}

const exercises = {
  forest: <ForestPage />,
  'word-builder': <WordBuilderPage />,
  'sentence-builder': <SentenceBuilderPage />,
  listening: <ListeningPage />,
  'audio-challenge': <AudioChallengePage />,
  'translation-word': <TranslationWordPage />,
  'word-translation': <WordTranslationPage />,
  sprint: <SprintPage />,
  repetition: <RepetitionPage />,
  'vocabulary-cards': <VocabularyCardsPage />,
}

export default function page({ params }: { params: { slug: string } }) {
  return exercises[params.slug]
}
