import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/MakesCell'

const DELETE_MAKE_MUTATION = gql`
  mutation DeleteMakeMutation($id: Int!) {
    deleteMake(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Make = ({ make }) => {
  const [deleteMake] = useMutation(DELETE_MAKE_MUTATION, {
    onCompleted: () => {
      toast.success('Make deleted')
      navigate(routes.makes())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete make ' + id + '?')) {
      deleteMake({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Make {make.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{make.id}</td>
            </tr>
            <tr>
              <th>Make name</th>
              <td>{make.makeName}</td>
            </tr>
            <tr>
              <th>Display</th>
              <td>{checkboxInputTag(make.display)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(make.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(make.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMake({ id: make.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(make.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Make
