import SingleLessonPage from '@/components/pages/SingleLessonPage'
import { Lessons } from '@/helpers/constants'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const lesson = Lessons.find(item => item.slug == slug)

  return {
    title: `Lesson | ${lesson?.slug.replace(/_/g, ' ')}`,
  }
}

export default function page({ params }: { params: { slug: string } }) {
  const lesson = Lessons.find(item => item.slug == params.slug)
  return <SingleLessonPage lesson={lesson} />
}
