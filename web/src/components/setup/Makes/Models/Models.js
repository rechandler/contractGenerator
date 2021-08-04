import { useEffect, useState, Fragment } from 'react'
import { useQuery, useMutation } from '@redwoodjs/web'
import { routes, navigate, useParams } from '@redwoodjs/router'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { QUERY as CATEGORY_QUERY } from '../../Categories/CategoriesCell/CategoriesCell'
import toast from 'react-hot-toast'

const defaultCategory = { name: 'Select default Category' }

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

const Models = ({ models }) => {
  const [displayModels, setDisplayModels] = useState(models)
  const [selected, setSelected] = useState(defaultCategory)
  const [categories, setCategories] = useState([])
  const categoryResults = useQuery(CATEGORY_QUERY)
  const { makeName } = useParams()
  const [updateModelCategoryInput] = useMutation(UPDATE_MODEL_CATEGORY, {
    onCompleted: ({ updateModelCategoryInput }) => {
      toast.success('Model Updated')
      setDisplayModels(updateModelCategoryInput)
    },
  })

  useEffect(() => {
    if (categoryResults.data)
      setCategories([
        defaultCategory,
        ...categoryResults.data.categoriesForCompany,
      ])
  }, [categoryResults])

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const handleRowClick = (model) => {
    const modelName = model.name
    navigate(routes.contractGeneratorModel({ makeName, modelName }))
  }

  const assignAllSelectedCategory = () => {
    const input = {
      models: models.map((model) => ({ name: model.name })),
      makeName,
      categoryId: selected.id,
    }
    updateModelCategoryInput({ variables: { input } })
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {makeName}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Assign Categories to individual models. To make it easy, you can
                assign all models to the same category using the select box
                below.
              </p>
              <div className="pt-5">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        Assign to
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
                {selected.id && (
                  <button
                    onClick={assignAllSelectedCategory}
                    type="button"
                    className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Assign Default Category
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white shadow sm:rounded-md">
              <ul className="divide-y divide-gray-200 max-h-96 overflow-auto">
                {displayModels.map((model) => (
                  <li key={model.name}>
                    <a
                      onClick={() => handleRowClick(model)}
                      className="cursor-pointer block hover:bg-gray-50"
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-cyan-600 truncate">
                            {model.name}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex">
                            {model.category && (
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {model.category.name}
                              </p>
                            )}
                          </div>
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

export default Models
