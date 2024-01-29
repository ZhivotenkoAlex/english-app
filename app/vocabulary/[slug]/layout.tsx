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
  return (
    <section>
      <PageMenuContainer>
        <BreadCrumbs />
        <ExerciseCloseBlock link={ROUTES.VOCABULARY} />
      </PageMenuContainer>
      {children}
    </section>
  )
}

const PageMenuContainer = styled.div`
  display: flex;
  padding: 20px 2rem;
`
