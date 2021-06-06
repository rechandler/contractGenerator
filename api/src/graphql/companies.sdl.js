export const schema = gql`
  type Company {
    id: Int!
    name: String!
    Dealerships: [Dealership]!
    Categories: [Category]!
    Models: [Model]!
    Source: [Source]!
  }

  type Query {
    companies: [Company!]!
  }

  input CreateCompanyInput {
    name: String!
  }

  input UpdateCompanyInput {
    name: String
  }
`
