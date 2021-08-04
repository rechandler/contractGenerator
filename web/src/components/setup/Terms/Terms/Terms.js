import { navigate, routes } from '@redwoodjs/router'

const Terms = ({terms}) => {

  const handleRowClick = termId => {
    return () => {
      navigate(routes.contractGeneratorTermEdit({termId}))
    }
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Terms and Conditions</h3>
              <p className="mt-1 text-sm text-gray-600">
                Contract Categories group vehicle together and pair them with only the contracts you choose.
                This prevents having to assign contracts to each vehicle individually
              </p>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => navigate(routes.contractGeneratorTermNew())}
              >
                Create New Term and Condition
              </button>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {terms.map((term) => (
                  <li key={term.id}>
                    <a onClick={handleRowClick(term.id)} className="cursor-pointer block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-cyan-600 truncate">{term.name}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
