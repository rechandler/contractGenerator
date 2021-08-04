import { useState } from 'react'
import CategoryForm from '../categoryForm'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_NOTE = gql`
  mutation yeet($input: CategoryInput!) {
    createCategory(input: $input) {
      id
      createdAt
    }
  }
`

const NewCategory = () => {
  const [create, { loading, error, data }] = useMutation(CREATE_NOTE)

  const submit = async (data) => {
    await create({ variables: { input: { ...data } } })
    navigate(routes.categories())
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Category
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Contract Categories group vehicle together and pair them with
                only the contracts you choose. This prevents having to assign
                contracts to each vehicle individually
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <CategoryForm loading={loading} submit={submit} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCategory
