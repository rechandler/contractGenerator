import ContractBasicInfo from '../ContractBasicInfo/ContractBasicInfo'

export const QUERY = gql`
  query ContractBasicInfoQuery($contractId: Int) {
    source(id: $contractId) {
      id
      name
      categories
      states
    }
    categoriesForCompany {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ source, categoriesForCompany }) => {
  return <ContractBasicInfo source={source} categories={categoriesForCompany} />
}
