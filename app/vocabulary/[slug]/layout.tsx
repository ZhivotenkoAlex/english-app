'use client'
import ExerciseCloseBlock from '@/components/molecules/ExerciseCloseBlock/ExerciseCloseBlock'
import ExerciseNameBlock from '@/components/molecules/ExerciseNameBlock/ExerciseNameBlock'
import { capitalizedWord } from '@/helpers/capitalized'
import ROUTES from '@/helpers/routes'
import styled from 'styled-components'

export default function VocabularyExercisesLayout({ params, children }: any) {
  const pageTitle = capitalizedWord(params.slug).replace('-', ' ')
  return (
    <section>
      <PageMenuContainer>
        <ExerciseNameBlock title={pageTitle} subtitle={'Vocabulary Training'} />
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
