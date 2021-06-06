export const schema = gql`
  type Term {
    id: Int!
    name: String!
    months: Int!
    mileage: Int!
    company: Company!
    companyId: Int!
    Sources: [Source]!
  }

  type Query {
    terms: [Term!]!
  }

  type Mutation {
    createTerm(input: CreateTermInput): Term
  }

  input CreateTermInput {
    name: String!
    months: Int!
    mileage: Int!
  }

  input UpdateTermInput {
    name: String
    months: Int
    mileage: Int
    companyId: Int
  }
`
