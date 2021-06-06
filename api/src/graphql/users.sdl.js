export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String
    lastName: String
    photo: String
    dealerships: [Dealership]!
    contracts: [Contract]!
  }

  type Query {
    users: [User!]!
    currentUser: User!
  }

  input CreateUserInput {
    email: String!
    photo: String
  }

  input UpdateUserInput {
    email: String
    photo: String
  }
`
