export const QUERY = gql`
  query MakeFormQuery {
    makeForm {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ makeForm }) => {
  return JSON.stringify(makeForm)
}
