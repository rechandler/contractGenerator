export const schema = gql`
  type Make {
    id: Int
    makeName: String
    display: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    makes: [Make!]!
    make(id: Int!): Make
    allMakes: [Make!]!
  }

  input CreateMakeInput {
    makeName: String!
    display: Boolean!
  }

  input MakeInput {
    makeName: String
  }

  input UpdateMakeInput {
    makeName: String
    display: Boolean
  }

  type Mutation {
    createMake(input: CreateMakeInput!): Make!
    updateMake(id: Int!, input: UpdateMakeInput!): Make!
    deleteMake(id: Int!): Make!
  }
`
