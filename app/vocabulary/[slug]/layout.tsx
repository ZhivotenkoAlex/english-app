'use client'
import BreadCrumbs from '@/components/features/Breadcrumbs'
import ExerciseCloseBlock from '@/components/molecules/ExerciseCloseBlock/ExerciseCloseBlock'
import ExerciseNameBlock from '@/components/molecules/ExerciseNameBlock/ExerciseNameBlock'
import { capitalizedWord } from '@/helpers/capitalized'
import ROUTES from '@/helpers/routes'
import styled from 'styled-components'

type PropTypes = {
  params: { slug: string }
  children: React.ReactNode
}

export default function VocabularyExercisesLayout({ params, children }: PropTypes) {
  const pageTitle = capitalizedWord(params.slug).replace('-', ' ')
  return (
    <section>
      <PageMenuContainer>
        <BreadCrumbs />
        {/* <ExerciseNameBlock title={pageTitle} subtitle={'Vocabulary Training'} /> */}
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
