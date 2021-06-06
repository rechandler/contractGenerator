import { navigate, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

const GET_TERMS = gql`
  query TermsQuery {
    terms {
      id,
      name
    }
  }
`

const ContractPricing = ({ formState }) => {

  const {loading, error, data} = useQuery(GET_TERMS)

  if (loading) {
    return '...fetching terms'
  }

  console.log(data)

  return (
    <div className={formState.currentStep === 2 ? "": "hidden"}>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-6">

        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Terms and Condition</h3>
            <p className="mt-1 text-sm text-gray-600">
              A Contracts TOC represents the the time in months or distance travelled that the warranty
              will cover. Example 3 Months / 30000 Miles. Select from the available Terms and Conditions
              or create a new one.
            </p>
            <button
              className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              onClick={() => navigate(routes.contractGeneratorTocNew())}>
              Create New TOC
            </button>
          </div>
        </div>
        <div className="mt-10 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <div className="grid grid-cols-3 ">
                  {data.terms.map(term => {
                    return (
                      <div key={`terms_${term.name}`} className="mt-3 flex items-start">
                        <div className="h-5 flex items-center">
                          <input id={term.name} name={term.id} type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={term.name} className="font-medium text-gray-700">{term.name}</label>
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

export default ContractPricing
