export const schema = gql`
  type Contract {
    id: Int!
    vin: String!
    make: String!
    model: String!
    year: Int!
    ownersName: String!
    User: User
    userId: Int
    createdAt: DateTime
    updatedAt: DateTime
    ownersEmail: String
  }

  type Query {
    contracts: [Contract!]!
    contractsByUser: [Contract]
    contract(id: Int): Contract
  }

  input CreateContractInput {
    vin: String!
    make: String!
    model: String!
    year: Int!
    userId: Int
  }

  input UpdateContractInput {
    vin: String
    make: String
    model: String
    year: Int
    userId: Int
  }
`
