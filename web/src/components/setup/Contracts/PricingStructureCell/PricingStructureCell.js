import PricingStructure from '../PricingStructure/PricingStructure'

export const QUERY = gql`
  query FindPricingStructureQuery($contractId: Int!) {
    source(id: $contractId) {
      id
      name
      categories
      states
    }
    termsForCompany {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ source, termsForCompany }) => {
  return <PricingStructure source={source} terms={termsForCompany} />
}
