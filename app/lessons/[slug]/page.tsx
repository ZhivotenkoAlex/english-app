import SingleLessonPage from '@/components/pages/SingleLessonPage'
import { Lessons } from '@/helpers/constants'
import { LessonType } from '@/types'
import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const lesson = Lessons.find(item => item.slug == slug) as LessonType

  return {
    title: `Lesson | ${lesson?.slug.replace(/_/g, ' ')}`,
  }
}

export default function page({ params }: { params: { slug: string } }) {
  const lesson = Lessons.find(item => item.slug == params.slug) as LessonType
  return <SingleLessonPage lesson={lesson} />
}
