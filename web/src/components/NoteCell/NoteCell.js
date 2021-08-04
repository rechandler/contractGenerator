import Notes from 'src/components/Notes/Notes'

export const QUERY = gql`
  query NoteQuery($id: Int, $type: String) {
    notes(id: $id, type: $type) {
      id
      createdAt
      author
      message
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ notes, id }) => <Notes notes={notes} id={id} />
