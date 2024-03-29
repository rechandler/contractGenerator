import Makes from '../Makes/Makes'
export const QUERY = gql`
  query MAKES {
    makes {
      id
      makeName
      display
      createdAt
      updatedAt
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ makes }) => {
  return <Makes makes={makes} />
}
