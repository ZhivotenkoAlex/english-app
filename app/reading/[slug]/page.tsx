import SingleArticlePage from '@/components/pages/SingleArticlePage'
import { capitalizedWord } from '@/helpers/capitalized'
import { content } from '@/helpers/ArticlesData'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

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
    title: `Reading | ${capitalizedName}`,
  }
}

export default function page({ params }: { params: { slug: string } }) {
  const articleContent = content.find(item => item.slug == params.slug)
  return <SingleArticlePage content={articleContent} />
}
