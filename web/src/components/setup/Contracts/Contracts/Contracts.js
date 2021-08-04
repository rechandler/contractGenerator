import { navigate, routes } from '@redwoodjs/router'

const Contracts = ({ createSource, sources }) => {
  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contracts
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Select a manufacturer to view their models. You'll assign
                categories to a model which will determine what contracts can be
                sold for a specific vehicle.
              </p>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={createSource}
              >
                Create New Contract
              </button>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 max-h-96 overflow-auto">
                {sources.map((source) => (
                  <li key={source.id}>
                    <a
                      onClick={() =>
                        navigate(
                          routes.contractGeneratorContractBasicInfo({
                            contractId: source.id,
                          })
                        )
                      }
                      className="cursor-pointer block hover:bg-gray-50"
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-cyan-600 truncate">
                            {source.name || source.id}
                          </p>
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

export default Contracts
