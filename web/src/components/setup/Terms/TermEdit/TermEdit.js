import { useMutation } from '@redwoodjs/web'
import { Form, TextField, NumberField, Submit } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { navigate, routes, useParams } from '@redwoodjs/router'

const EDIT_TERM = gql`
  mutation editTermMutation($input: UpdateTermInput!) {
    editTerm(input: $input) {
      id,
    }
  }
`

const DELETE_TERM = gql`
mutation DeleteTermMutation($termId: Int!) {
  deleteTerm(termId: $termId) {
    id
  }
}
`

const TermEdit = ({ term }) => {
  const { termId } = useParams()
  const [updateTerm, updateTermState] = useMutation(EDIT_TERM)
  const [deleteTerm, deleteTermState] = useMutation(DELETE_TERM)

  const formMethods = useForm( {
    defaultValues: { ...term }
  })

  const handleDelete = async () => {
    await deleteTerm({ variables: { termId: termId }})
    navigate(routes.contractGeneratorTerms())
  }

  const submit = async (data) => {
    await updateTerm({ variables: { input: {...data } } })
    navigate(routes.contractGeneratorTerms())
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 flex flex-col">
            <div className="px-4 sm:px-0 flex-grow">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Term and Condition</h3>
              <p className="mt-1 text-sm text-gray-600">
                Contract Categories group vehicle together and pair them with only the contracts you choose.
                This prevents having to assign contracts to each vehicle individually
              </p>
            </div>
            <button
              type="button"
              onClick={handleDelete}
              className="self-start inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Term and Condition
            </button>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form formMethods={formMethods} onSubmit={submit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <TextField
                          name="name"
                          id="name"
                          className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="months" className="block text-sm font-medium text-gray-700">
                        Months
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <NumberField
                          name="months"
                          id="months"
                          className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                        Mileage
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <NumberField
                          name="mileage"
                          id="mileage"
                          className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <NumberField
                    name="companyId"
                    id="companyId"
                    className="hidden focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                    placeholder=""
                  />
                   <NumberField
                    name="id"
                    id="id"
                    className="hidden focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                    placeholder=""
                  />
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={() => navigate(routes.contractGeneratorTerms())}
                  >
                    Cancel
                  </button>
                  <Submit
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Save
                  </Submit>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermEdit
