import GrammarTensePage from '@/components/pages/GrammarTensePage'
import { capitalizedWord } from '@/helpers/capitalized'
import { Lessons } from '@/helpers/constants'
import { LessonType } from '@/types'
import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const lesson = Lessons.find(item => item.slug == slug) as LessonType

  const tabName = slug.replace(/_/g, ' ')
  capitalizedWord

  return {
    title: `Grammar | ${capitalizedWord(tabName)}`,
    description: 'Easy way to learn English',
  }
}

export default function page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  return <GrammarTensePage slug={slug} />
}
