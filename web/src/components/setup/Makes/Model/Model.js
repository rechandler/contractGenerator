import { useEffect, useState, Fragment } from 'react'
import { useQuery, useMutation } from '@redwoodjs/web'
import { routes, navigate, useParams } from '@redwoodjs/router'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { QUERY as CATEGORY_QUERY } from '../../Categories/CategoriesCell/CategoriesCell'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

const defaultCategory = { name: 'None' }

const UPDATE_MODEL_CATEGORY = gql`
  mutation updateModelCategoryInput($input: ModelCategoryInput!) {
    updateModelCategoryInput(input: $input) {
      name
      category {
        name
      }
    }
  }
`

const DELETE_MODEL = gql`
  mutation deleteModelCategory($id: Int) {
    deleteModelCategory(id: $id) {
      id
    }
  }
`

const Model = ({ model }) => {
  const { makeName } = useParams()
  const [selected, setSelected] = useState(defaultCategory)
  const [categories, setCategories] = useState([])
  const [updateModelCategoryInput, { loading, data, error }] = useMutation(
    UPDATE_MODEL_CATEGORY,
    {
      onCompleted: () => {
        navigate(routes.contractGeneratorModels({ makeName }))
      },
    }
  )
  const [deleteModel] = useMutation(DELETE_MODEL, {
    onCompleted: () => {
      navigate(routes.contractGeneratorModels({ makeName }))
    },
  })
  const categoryResults = useQuery(CATEGORY_QUERY)

  const formMethods = useForm({
    defaultValues: { ...model },
  })

  useEffect(() => {
    if (categoryResults.data) {
      setCategories([
        defaultCategory,
        ...categoryResults.data.categoriesForCompany,
      ])

      if (model.category) {
        setSelected(
          categoryResults.data.categoriesForCompany.find(
            (cat) => cat.id === model.category.id
          )
        )
      }
    }
  }, [categoryResults])

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const submit = () => {
    if (selected.id) {
      const input = {
        models: { name: model.name },
        makeName,
        categoryId: selected.id,
      }
      updateModelCategoryInput({ variables: { input } })
    } else if (model.category && !selected.id) {
      deleteModel({ variables: { id: model.id } })
    }
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {model.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Assign the {makeName} {model.name} to a category, or choose to
                not support it.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form formMethods={formMethods} onSubmit={submit}>
              <div className="shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Current Category
                            </Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
                                <span className="block truncate">
                                  {selected.name}
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options
                                  static
                                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {categories.map((category) => (
                                    <Listbox.Option
                                      key={`model_listbox_${category.id}`}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? 'text-white bg-cyan-600'
                                            : 'text-gray-900',
                                          'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                      }
                                      value={category}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              selected
                                                ? 'font-semibold'
                                                : 'font-normal',
                                              'block truncate'
                                            )}
                                          >
                                            {category.name}
                                          </span>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? 'text-white'
                                                  : 'text-cyan-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
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
                    onClick={() =>
                      navigate(routes.contractGeneratorModels({ makeName }))
                    }
                  >
                    Back
                  </button>
                  <Submit className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    Save
                  </Submit>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
