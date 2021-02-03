import { useSelector } from 'react-redux'

import ThreeColSpanLayout from 'src/layouts/ThreeColSpanLayout/ThreeColSpanLayout';

const VehicleInfo = () => {
  const vehicleValues = useSelector(state => state.vehicleForm.vehicleValues)

  return (
    <ThreeColSpanLayout>
      <dl className="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-3">
        <div className=" overflow-hidden shadow rounded-lg flex">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gradient-to-tr from-red-500 to-red-200 text-white text-sm font-medium rounded-l-md"></div>
          <div className="bg-white flex-grow px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Make
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {vehicleValues.make}
            </dd>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg flex">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gradient-to-tr from-cyan-500 to-secondary text-white text-sm font-medium rounded-l-md"></div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Model
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {vehicleValues.model}
            </dd>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg flex">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gradient-to-tr from-cyan-500 to-secondary text-white text-sm font-medium rounded-l-md"></div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Year
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {vehicleValues.year}
            </dd>
          </div>
        </div>
      </dl>
    </ThreeColSpanLayout>
  )
}

export default VehicleInfo
