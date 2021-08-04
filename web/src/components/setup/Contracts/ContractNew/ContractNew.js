import { useMutation } from '@redwoodjs/web'
import ContractForm from '../ContractForm/ContractForm'

const CREATE_SOURCE = gql`
  mutation test($input: CategoryInput!) {
    createCategory(input: $input) {
      id
      createdAt
    }
  }
`

const ContractNew = () => {
  const [create, { loading, error, data }] = useMutation(CREATE_SOURCE)

  const submit = async (data) => {
    await create({ variables: { input: { ...data } } })
    navigate(routes.categories())
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <ContractForm loading={loading} submit={submit} />
      </div>
    </div>
  )
}

export default ContractNew
