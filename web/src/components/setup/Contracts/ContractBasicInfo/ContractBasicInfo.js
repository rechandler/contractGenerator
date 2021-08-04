import { TextField, CheckboxField, Submit, Form } from '@redwoodjs/forms'
import States from 'src/components/setup/Contracts/states'
import { useMutation } from '@redwoodjs/web'
import ContractNav from '../ContractNavigation'
import { useForm } from 'react-hook-form'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_BASIC_INFO = gql`
  mutation CreateBasicInfoMutation($id: Int, $input: CreateBasicInfoInput!) {
    createBasicInfo(id: $id, input: $input) {
      id
    }
  }
`

const transformSourceData = (source) => {
  if (!source) return {}

  const result = {
    name: source.name,
  }

  result.states = source?.states?.reduce((acc, state) => {
    acc[state] = true
    return acc
  }, {})

  result.categories = source?.categories?.reduce((acc, category) => {
    acc[category.name] = true
    return acc
  }, {})

  return result
}

const ContractBasicInfo = ({ source, categories }) => {
  const [create, _] = useMutation(CREATE_BASIC_INFO, {
    onCompleted: () =>
      navigate(
        routes.contractGeneratorContractPricingStructure({
          contractId: source.id,
        })
      ),
  })
  const formMethods = useForm({
    defaultValues: transformSourceData(source),
  })

  const onSubmit = async (data) => {
    const id = source.id
    const input = transformInfo(data)
    await create({ variables: { input, id } })
  }

  const transformInfo = (data) => {
    const categories = getCategoryIds(data.categories)
    const states = getStates(data.states)
    const name = data.name
    return {
      name,
      categories,
      states,
    }
  }

  const getCategoryIds = (inputCategories) => {
    return Object.keys(inputCategories)
      .filter((key) => inputCategories[key])
      .map((key) => categories.find((cat) => cat.name === key).id)
  }

  const getStates = (inputStates) => {
    return Object.keys(inputStates)
      .filter((key) => {
        return inputStates[key]
      })
      .map((key) => key)
  }

  return (
    <div className="col-span-9">
      <ContractNav />
      <Form className="p-10" formMethods={formMethods} onSubmit={onSubmit}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Contract
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Contract Categories group vehicle together and pair them with
                only the contracts you choose. This prevents having to assign
                contracts to each vehicle individually
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contract Name
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
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 mt-10">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Categories
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If a vehicle falls under one of the selected categories, This
                contract will be offered to be sold.
              </p>
            </div>
          </div>
          <div className="mt-10 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="flex">
                      <fieldset>
                        <div className="space-y-4">
                          {categories.map((result) => {
                            return (
                              <div
                                key={`categories_${result.name}`}
                                className="flex items-start"
                              >
                                <div className="h-5 flex items-center">
                                  <CheckboxField
                                    id={result.name}
                                    name={`categories.${result.name}`}
                                    className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor={result.name}
                                    className="font-medium text-gray-700"
                                  >
                                    {result.name}
                                  </label>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 mt-10">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                States
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                You can limit a contract to dealers located in the selected
                states. If you want all states, toggle the all states switch.
              </p>
            </div>
          </div>
          <div className="mt-10 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <div className="grid grid-cols-3 ">
                    {Object.entries(States).map(([key, value]) => {
                      return (
                        <div
                          key={`states_${value}`}
                          className="mt-3 flex items-start"
                        >
                          <div className="h-5 flex items-center">
                            <CheckboxField
                              id={key}
                              name={`states.${key}`}
                              className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={key}
                              className="font-medium text-gray-700"
                            >
                              {value}
                            </label>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <Submit className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Next
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContractBasicInfo
