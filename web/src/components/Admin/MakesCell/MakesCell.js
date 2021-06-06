import { Link, routes } from '@redwoodjs/router'

import Makes from 'src/components/Admin/Makes'

export const QUERY = gql`
  query ALLMAKES {
    allMakes {
      id
      makeName
      display
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No makes yet. '}
      <Link to={routes.newMake()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ allMakes }) => {
  return <Makes makes={allMakes} />
}
