import { IGrammarLevel, ITenseData } from '@/types'
import { TypedDocumentNode, gql } from '@apollo/client'

type GrammarList = { getAllGrammars: [IGrammarLevel] }
type Grammar = { getGrammarBySlug: ITenseData[] }

export const GET_GRAMMAR_LIST: TypedDocumentNode<GrammarList> = gql`
  query {
    getAllGrammars {
      id
      level
      levelExercises {
        title
        subtitle
        icon
        slug
      }
    }
  }
`

export const GRAMMAR_BY_SLUG: TypedDocumentNode<Grammar> = gql`
  query {
    getGrammarBySlug(slug: $slug) {
      id
      slug
      status
    }
  }
`
