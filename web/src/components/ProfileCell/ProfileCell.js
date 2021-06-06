import Profile from 'src/components/Profile/Profile'
export const QUERY = gql`
  query ProfileQuery {
    currentUser {
      id,
      email,
      firstName,
      lastName,
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ currentUser }) => {
  return (
    <Profile currentUser={currentUser} />
  )
}
