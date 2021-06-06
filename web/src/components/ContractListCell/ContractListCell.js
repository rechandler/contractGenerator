import { routes, Link } from '@redwoodjs/router/dist/internal'
import { friendlyDate } from 'src/helpers/date'

export const QUERY = gql`
  query ContractListQuery {
    contractsByUser {
      id,
      vin,
      make,
      model,
      year,
      ownersName,
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ contractsByUser }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        { contractsByUser.map(contract => {
          return (
            <li key={contract.vin}>
              <Link to={routes.contract({id: contract.id})} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                      <div className="">
                        <p className="text-sm font-medium text-cyan-600 truncate">Name</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          {/* <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-cyan-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                          </svg> */}
                          <span className="truncate">{contract.ownersName}</span>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-sm font-medium text-cyan-600 truncate">Vehicle</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{`${contract.year} ${contract.make} ${contract.model}`}</span>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-sm font-medium text-cyan-600 truncate">Vin</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{contract.vin}</span>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-sm font-medium text-cyan-600 truncate">Date Sold</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{friendlyDate(contract.createdAt) }</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <!-- Heroicon name: chevron-right --> */}
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}
