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
    term(termId: Int!): Term!
    termsForCompany: [Term]
  }

  type Mutation {
    createTerm(input: CreateTermInput): Term
    editTerm(input: UpdateTermInput): Term
    deleteTerm(termId: Int!): Term
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
    id: Int
  }
`
