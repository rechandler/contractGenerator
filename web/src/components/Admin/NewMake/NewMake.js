import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MakeForm from 'src/components/Admin/MakeForm'

import { QUERY } from 'src/components/Admin/MakesCell'

const CREATE_MAKE_MUTATION = gql`
  mutation CreateMakeMutation($input: CreateMakeInput!) {
    createMake(input: $input) {
      id
    }
  }
`

const NewMake = () => {
  const [createMake, { loading, error }] = useMutation(CREATE_MAKE_MUTATION, {
    onCompleted: () => {
      toast.success('Make created')
      navigate(routes.makes())
    },
  })

  const onSave = (input) => {
    createMake({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Make</h2>
      </header>
      <div className="rw-segment-main">
        <MakeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMake
