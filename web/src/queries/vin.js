export const VIN_SEARCH = gql`
  query VIN_SEARCH($vin: String!) {
    vinSearch: vinSearch(vin: $vin) {
      year,
      make,
      model,
      vin,
      trim,
      engineSize
    }
  }
`
