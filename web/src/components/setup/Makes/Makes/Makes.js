import { navigate, routes } from '@redwoodjs/router'

const Makes = ({ makes }) => {

  const handleRowClick = make => {
    const makeName = make.makeName
    navigate(routes.contractGeneratorModels({makeName}))
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Manufacturer</h3>
              <p className="mt-1 text-sm text-gray-600">
                Select a manufacturer to view their models. You'll assign categories to a model which will
                determine what contracts can be sold for a specific vehicle.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 max-h-96 overflow-auto">
                {makes.map((make) => (
                  <li key={make.id}>
                    <a onClick={() => handleRowClick(make)} className="cursor-pointer block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-cyan-600 truncate">{make.makeName}</p>
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

export default Makes
