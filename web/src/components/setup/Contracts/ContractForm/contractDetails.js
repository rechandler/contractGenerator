import { TextField, NumberField, Submit } from '@redwoodjs/forms'
import States from 'src/components/setup/Contracts/states'
import { QUERY } from 'src/components/setup/Categories/CategoriesCell/CategoriesCell'
import { useQuery } from '@redwoodjs/web'

const ContractDetails = ({ categoryResults, formState }) => {

  const {loading, error, data} = useQuery(QUERY)

  if (loading) {
    return '...loading categories'
  }

  return (
    <div className={formState.currentStep === 1 ? "": "hidden"}>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">New Contract</h3>
            <p className="mt-1 text-sm text-gray-600">
              Contract Categories group vehicle together and pair them with only the contracts you choose.
              This prevents having to assign contracts to each vehicle individually
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
            <h3 className="text-lg font-medium leading-6 text-gray-900">Categories</h3>
            <p className="mt-1 text-sm text-gray-600">
              If a vehicle falls under one of the selected categories, This contract will be offered to be sold.
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
                        {data.categoriesForCompany.map((result) => {
                          return (
                            <div key={`contracts_${result.name}`} className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input id={result.name} name={result.name} type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded" />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor={result.name} className="font-medium text-gray-700">{result.name}</label>
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
            <h3 className="text-lg font-medium leading-6 text-gray-900">States</h3>
            <p className="mt-1 text-sm text-gray-600">
              You can limit a contract to dealers located in the selected states. If you want
              all states, toggle the all states switch.
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
                      <div key={`states_${value}`} className="mt-3 flex items-start">
                        <div className="h-5 flex items-center">
                          <input id={key} name={key} type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={key} className="font-medium text-gray-700">{value}</label>
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
  )
}

export default ContractDetails
