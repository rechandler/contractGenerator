export const schema = gql`
  type Source {
    id: Int!
    name: String!
    company: Company!
    companyId: Int!
    category: Category!
    categoryId: Int!
  }

  type Query {
    sources: [Source!]!
  }

  type Mutation {
    createSource: [Source]
  }

  input CreateSourceInput {
    name: String!
    companyId: Int!
    categoryId: Int!
  }

  input UpdateSourceInput {
    name: String
    companyId: Int
    categoryId: Int
  }
`
