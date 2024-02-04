'use client'
import BreadCrumbs from '@/components/features/Breadcrumbs'
import ExerciseCloseBlock from '@/components/molecules/ExerciseCloseBlock/ExerciseCloseBlock'
import ROUTES from '@/helpers/routes'
import styled from 'styled-components'

type PropTypes = {
  params: { slug: string }
  children: React.ReactNode
}

export default function VocabularyExercisesLayout({ params, children }: PropTypes) {
  const slug = params.slug.replaceAll('_', ' ')
  const customName = params.slug === 'present_meaning' ? 'Tenses with Present meaning' : slug

  return (
    <section>
      <PageMenuContainer>
        <BreadCrumbs customName={customName} />
        <ExerciseCloseBlock link={ROUTES.GRAMMAR} />
      </PageMenuContainer>
      {children}
    </section>
  )
}

const PageMenuContainer = styled.div`
  display: flex;
  padding: 20px 2rem;
  align-items: center;
`
