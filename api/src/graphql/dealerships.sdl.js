export const schema = gql`
  type Dealership {
    id: Int!
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    din: String!
    phone: String
    users: [User]!
  }

  type Query {
    dealerships: [Dealership!]!
  }

  input CreateDealershipInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    din: String!
    phone: String
  }

  input UpdateDealershipInput {
    name: String
    address: String
    city: String
    state: String
    zip: String
    din: String
    phone: String
  }
`
