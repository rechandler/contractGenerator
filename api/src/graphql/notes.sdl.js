export const schema = gql`
  type Note {
    id: Int!
    message: String!
    createdAt: DateTime!
    author: String!
    Contract: Contract
    contractId: Int
    userId: Int
  }

  type Query {
    notes(id: Int, type: String): [Note]
  }

  input CreateNoteInput {
    message: String!
    author: String!
    id: Int!
    type: String!
    userId: Int
  }

  input UpdateNoteInput {
    message: String
    author: String
    contractId: Int
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note
    deleteNote(id: Int!, contractId: Int!, type: String!, userId: Int): [Note]
  }
`
