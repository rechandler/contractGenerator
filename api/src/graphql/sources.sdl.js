export const schema = gql`
  type Source {
    id: Int!
    name: String
    company: Company!
    companyId: Int!
    categories: JSON
    states: JSON
  }

  type Query {
    sources: [Source!]!
    source(id: Int): Source
  }

  type Mutation {
    createSource: Source
    createBasicInfo(id: Int, input: CreateBasicInfoInput): Source
  }

  input CreateBasicInfoInput {
    name: String
    categories: [Int]
    states: [String]
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
