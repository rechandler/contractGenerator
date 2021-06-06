import { useState } from 'react'
import CategoryForm from '../categoryForm'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

const UPDATE_CATEGORY = gql`
  mutation CreateCategoryMutation($input: UpdateCategory!) {
    updateCategory(input: $input) {
      id,
      createdAt,
    }
  }
`

const DELETE_CATEGORY = gql`
mutation DeleteCategoryMutation($id: Int!) {
  deleteCategory(id: $id) {
    id
  }
}
`

const CategoryEdit = ({ category }) => {
  const [updateCategory, updateState] = useMutation(UPDATE_CATEGORY)
  const [deleteCategory, deleteState] = useMutation(DELETE_CATEGORY)

  const submit = async (data) => {
    await updateCategory({ variables: { input: {...data } } })
    navigate(routes.categories())
  }

  const handleDelete = async () => {
    await deleteCategory({ variables: {id: category.id }})
    navigate(routes.categories())
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 flex flex-col">
            <div className="px-4 sm:px-0 flex-grow">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Category</h3>
              <p className="mt-1 text-sm text-gray-600">
                Contract Categories group vehicle together and pair them with only the contracts you choose.
                This prevents having to assign contracts to each vehicle individually
              </p>
            </div>
            <button
              type="button"
              onClick={handleDelete}
              className="self-start inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Category
            </button>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <CategoryForm
              category={category}
              loading={updateState.loading || deleteState.loading}
              submit={submit}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryEdit
