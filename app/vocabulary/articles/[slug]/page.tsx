import SingleArticlePage from '@/components/pages/SingleArticlePage'
import { capitalizedWord } from '@/helpers/capitalized'
import { Lessons } from '@/helpers/constants'
import { content } from '@/helpers/ArticlesData'

import { LessonType } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params?.slug

  // fetch data
  const articleName = slug.replace(/_/g, ' ')
  const capitalizedName = capitalizedWord(articleName)
  return {
    title: `Lesson | Articles | ${capitalizedName}`,
  }
}

export default function page({ params }: { params: { slug: string } }) {
  const articleContent = content.find(item => item.slug == params.slug) as any
  return <SingleArticlePage content={articleContent} />
}
