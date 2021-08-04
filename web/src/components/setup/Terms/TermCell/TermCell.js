import TermEdit from '../TermEdit/TermEdit'

export const QUERY = gql`
  query TermQuery($termId: Int!) {
    term(termId: $termId) {
      id,
      name,
      mileage,
      months,
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ term }) => {
  return <TermEdit term={term} />
}
