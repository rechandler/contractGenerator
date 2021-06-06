import { navigate, routes } from '@redwoodjs/router'
import { Form, TextField, NumberField, Submit } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { Switch } from '@headlessui/react'

export default ({ category, submit, loading }) => {

  const formMethods = useForm( {
    defaultValues: { ...category }
  })

  if (loading) {
    return '...saving new category'
  }

  return (
    <Form formMethods={formMethods} onSubmit={submit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <TextField
                  name="name"
                  id="name"
                  className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                  placeholder=""
                />
              </div>
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="yearsBack" className="block text-sm font-medium text-gray-700">
                Years Back
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <NumberField
                  name="yearsBack"
                  id="yearsBack"
                  className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                  placeholder=""
                />
              </div>
            </div>

            <div className="invisible">
              <TextField
                transformValue="Int"
                name="id"
                id="id"
                className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full rounded rounded-r-md sm:text-sm border-gray-300"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => navigate(routes.categories())}
          >
            Back
          </button>
          <Submit
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Save
          </Submit>
        </div>
      </div>
    </Form>
  )
}
