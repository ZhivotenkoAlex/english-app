import { gql } from '@apollo/client'

export const UPDATE_STATUS = gql`
  mutation updateGrammarStatus($id: ID!, $status: String!) {
    updateGrammarStatus(input: { id: $id, status: $status }) {
      id
    }
  }
`
