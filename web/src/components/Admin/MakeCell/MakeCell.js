import Make from 'src/components/Admin/Make'

export const QUERY = gql`
  query FIND_MAKE_BY_ID($id: Int!) {
    make: make(id: $id) {
      id
      makeName
      display
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Make not found</div>

export const Success = ({ make }) => {
  return <Make make={make} />
}
