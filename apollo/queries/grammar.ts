import { IGrammar, IGrammarLevel } from '@/types'
import { TypedDocumentNode, gql } from '@apollo/client'

type GrammarList = { getAllGrammars: [IGrammarLevel] }
type Grammar = { getGrammarBySlug: IGrammar }

export const GET_GRAMMAR_LIST: TypedDocumentNode<GrammarList> = gql`
  query {
    getAllGrammars {
      id
      level
      levelExercises {
        id
        title
        subtitle
        icon
        slug
      }
    }
  }
`

export const GRAMMAR_BY_SLUG: TypedDocumentNode<Grammar> = gql`
  query getGrammarBySlug($slug: String!) {
    getGrammarBySlug(slug: $slug) {
      id
      slug
      status
      title
      subtitle
      icon
      exercises {
        id
        title
        translation
        exerciseItems {
          id
          isPunctuation
          title
          variants {
            id
            variant
          }
        }
      }
    }
  }
`
