export const schema = gql`
  type Upload {
    filename: String!
  }

  type Response {
    signedUrl: String!
  }

  type Query {
    getSignedUrl(filename: String!): Response
  }
`
