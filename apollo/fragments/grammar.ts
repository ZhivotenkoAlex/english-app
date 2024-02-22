import { gql } from '@apollo/client'

export const LEVEL_EXERCISES = gql`
  fragment LevelExercises on Grammar {
    slug
    status
    title
    subtitle
    icon
  }
`

export const EXERCISE_ITEMS = gql`
  fragment ExerciseItems on Items {
    id
    isPunctuation
    title
    variants {
      id
      variant
    }
  }
`
