import { Form, TextField, NumberField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes, useParams } from '@redwoodjs/router'

const CREATE_TERM = gql`
  mutation CreateTerm($input: CreateTermInput!) {
    createTerm(input: $input) {
      id,
    }
  }
`

const Toc = () => {
  const [create, { loading, error, data}] = useMutation(CREATE_TERM)
  const { backTo } = useParams()

  const submit = async (data) => {
    await create({ variables: { input: {...data } } })
    handleNavigation()
  }

  const handleClick = event => {
    event.preventDefault()
    handleNavigation()
  }

  const handleNavigation = () => {
    backTo ? navigate(routes.contractGeneratorContractNew()) : navigate(routes.contractGeneratorTerms())
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">New Terms and Condition</h3>
              <p className="mt-1 text-sm text-gray-600">
                Terms and Conditions are applied to a contract and specify the terms and conditions of the contract. The name is the
                friendly name of the TOC and will show in the app. Months and Mileage is used to determine if a vehicle falls under
                the conditions.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form onSubmit={submit}>
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
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={handleClick}
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

export default Toc
