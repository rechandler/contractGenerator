import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MakeForm from 'src/components/Admin/MakeForm'

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
const UPDATE_MAKE_MUTATION = gql`
  mutation UpdateMakeMutation($id: Int!, $input: UpdateMakeInput!) {
    updateMake(id: $id, input: $input) {
      id
      makeName
      display
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ make }) => {
  const [updateMake, { loading, error }] = useMutation(UPDATE_MAKE_MUTATION, {
    onCompleted: () => {
      toast.success('Make updated')
      navigate(routes.makes())
    },
  })

  const onSave = (input, id) => {
    updateMake({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Make {make.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MakeForm make={make} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
