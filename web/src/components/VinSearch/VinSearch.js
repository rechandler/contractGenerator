import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Spinner from 'src/components/Spinner/Spinner';
import { VIN_SEARCH } from 'src/queries/vin';
import { useDispatch, useSelector } from 'react-redux'
import { addVehicleValues } from 'src/slices/vin'
import { routes, navigate, useParams } from '@redwoodjs/router'

const VinSearch = () => {
  const dispatch = useDispatch()
  const storedVin = useSelector(state => state.vehicleForm.vehicleValues.vin)
  const [vin, setVin] = useState();
  const [getVehicle, { loading, data }] = useLazyQuery(
    VIN_SEARCH,
    {
      variables: { vin },
      onCompleted: data => successCallback(data)
    }
  );
  useEffect(() => {
    if (storedVin) {
      setVin(storedVin)
    }
  }, [storedVin])

  const search = event => {
    event.preventDefault();
    getVehicle();
  }

  const successCallback = data => {
    dispatch(addVehicleValues(data.vinSearch))
    navigate(routes.contractGenerator())
  }

  return (
    <div className="max-w-xs mx-auto w-full lg:max-w-md">
      <label htmlFor="search" className="sr-only">Search</label>
      <form className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-2" onSubmit={search}>
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <div className="relative text-white focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              {/* <!-- Heroicon name: search --> */}
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="search"
              className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Search for a VIN"
              type="search"
              name="search"
              value={vin}
              onChange={e => setVin(e.target.value)}
            />
          </div>
        </div>
         <div className="grid grid-cols-1 gap-4">
          <button type="submit" className="justify-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            {loading ? <Spinner /> : 'Go'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default VinSearch
