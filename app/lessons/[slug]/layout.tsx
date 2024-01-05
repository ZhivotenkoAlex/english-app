'use client'
import styled from 'styled-components'
import { Lessons } from '@/helpers/constants'
import Image from 'next/image'

export default function LessonLayout({
  params,
  children,
}: {
  params: { slug: string }
  children: React.ReactNode
}) {
  const slug = params.slug
  const lesson = Lessons.find(item => item.slug == slug)
  return (
    <section>
      <Heading>
        <StyledImage
          src={`/images/lessons/${lesson?.imageName}.jpg`}
          alt="word cloud"
          width={200}
          height={200}
        />
        <PageTitle>{lesson?.topic}</PageTitle>
      </Heading>
      {children}
    </section>
  )
}

const Heading = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
`

const PageTitle = styled.h1`
  padding: 6px 16px;
  letter-spacing: 0.2px;
  margin: 0 auto;
  width: 75%;
  text-wrap: nowrap;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`

const StyledImage = styled(Image)`
  border-radius: 16px;
  object-fit: fit;
  filter: grayscale(20%);
  height: 100%;
  margin-bottom: 20px;
`
