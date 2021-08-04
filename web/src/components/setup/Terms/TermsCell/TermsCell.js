import Terms from '../Terms/Terms'

export const QUERY = gql`
  query TermsQuery {
    terms {
      id,
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ terms }) => {
  return <Terms terms={terms} />
}
