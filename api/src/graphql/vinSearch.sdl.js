export const schema = gql`
  type Query {
    vinSearch(vin: String): VehicleResponse
  }

  type VehicleResponse {
    vin: String
    make: String
    model: String
    year: String
    trim: String
    engineSize: String
  }
`
