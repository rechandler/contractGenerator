import { navigate, routes } from '@redwoodjs/router'
import Categories from '../Categories/Categories'

export const QUERY = gql`
  query CategoriesQuery {
    categoriesForCompany {
      id,
      name,
      yearsBack
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="col-span-9">
      <div className="flex flex-auto justify-center content-center h-full">
        <div className="self-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">No Categories</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            You haven't configured any categories yet. Categories help classify your contracts. Go ahead and create one now!
          </p>
          <div className="flex flex-auto justify-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              onClick={() => navigate(routes.categoryNew())}
            >
              Create First Category
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ categoriesForCompany }) => {
  return <Categories  categories={categoriesForCompany} />
}
