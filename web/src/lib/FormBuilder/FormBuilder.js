import { useState } from 'react'
import baseSchema from './baseSchema'
import FormField from './formField'
import { TextField } from '@redwoodjs/forms'
import FieldOption from './fieldOption'
import { addFormBuilderValues } from 'src/slices/formBuilder'
import { useDispatch, useSelector } from 'react-redux'

const NEW_PAGE = (num) => ({
  pageName: `New Page ${num}`,
  description: '',
  rows: [],
  current: true,
})

const NEW_FIELD = {
  type: null,
  fieldName: null,
  label: null,
}

export const CUSTOM_FORM = 'contract_input'

const FormBuilder = () => {
  const currentFormSchema = useSelector(
    (state) => state.createFormBuilder.formBuilder
  )

  const dispatch = useDispatch()
  const [stateSchema, setStateSchemaHook] = useState(
    Object.keys(currentFormSchema).length ? currentFormSchema : baseSchema
  )
  const [currPage, setCurrentPage] = useState(0)

  const page = stateSchema[currPage]

  if (!page) return '...loading'

  // Fix this, don't use 2 states. use only redux
  const setStateSchema = async (newSchema) => {
    await dispatch(addFormBuilderValues(newSchema))
    setStateSchemaHook(newSchema)
  }

  const addPage = () => {
    const newState = JSON.parse(JSON.stringify(stateSchema))
    newState.forEach((page) => (page.current = false))
    setStateSchema([...newState, NEW_PAGE(newState.length + 1)])
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const getState = () => JSON.parse(JSON.stringify(stateSchema))

  const addField = () => {
    const newState = getState()
    newState[currPage].rows = [...newState[currPage].rows, NEW_FIELD]
    setStateSchema([...newState])
  }

  const updatePageName = (idx, value) => {
    const newState = getState()
    newState[idx].pageName = value
    setStateSchema([...newState])
  }

  const removeField = (rowIndex) => {
    return () => {
      const newState = getState()
      newState[currPage].rows.splice(rowIndex, 1)
      setStateSchema([...newState])
    }
  }

  const removePage = (pageIndex) => {
    return () => {
      const newState = getState()
      setCurrentPage(0)
      newState.splice(pageIndex, 1)
      setStateSchema([...newState])
    }
  }

  return (
    <div className="flex flex-col justify-center space-y-5 mt-5">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div className="sm:border-b sm:border-gray-200 mb-2 pb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Contract Data
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This information describes your the data that needs to be
                collected for this specific contract. Each panel of fields will
                display on a separate page for the users.
              </p>
            </div>

            <div className="mb-10">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
                  defaultValue={page.pageName}
                >
                  {stateSchema.map((tab) => (
                    <option key={tab.pageName}>{tab.pageName}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex" aria-label="Tabs">
                    {stateSchema.map((tab, idx) => (
                      <button
                        key={`${tab.pageName}_tab`}
                        onClick={() => setCurrentPage(idx)}
                        className={classNames(
                          tab.pageName === page.pageName
                            ? 'border-cyan-500 text-cyan-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm relative'
                        )}
                        aria-current={
                          tab.pageName === page.pageName ? 'page' : undefined
                        }
                      >
                        {tab.pageName}
                        <div
                          className={`absolute right-0 top-3 ${
                            tab.pageName === page.pageName
                              ? 'visible'
                              : 'hidden'
                          }`}
                        >
                          <FieldOption
                            removeOption={removePage(idx)}
                            label="Remove Page"
                          />
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="pageName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Page Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <TextField
                        name="yeet"
                        className="flex-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                        value={page.pageName}
                        onChange={(evt) =>
                          updatePageName(currPage, evt.target.value)
                        }
                      />
                    </div>
                    <p className="mt-5 text-sm text-gray-600">
                      Each panel on the right represents an input that is used
                      to collect info to fill out your forms. You must provide
                      all three values for each field.
                    </p>
                    <button
                      onClick={addPage}
                      type="button"
                      className="mt-5 w-full inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      <p className="w-full text-center">Add New Page</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2 space-y-5">
                {page.rows?.map((row, rowIndex) => {
                  return (
                    <div
                      key={`${row.name}_${rowIndex}_row`}
                      className="shadow sm:rounded-md sm:overflow-hidden"
                    >
                      <div className="px-4 py-5 bg-white">
                        <div className="flex flex-col">
                          <FieldOption
                            removeOption={removeField(rowIndex)}
                            label="Remove Field"
                          />

                          <div className="divide-y space-y-14">
                            <FormField
                              row={row}
                              idx={currPage}
                              rowIndex={rowIndex}
                              pageName={page.pageName}
                              stateSchema={stateSchema}
                              setStateSchema={setStateSchema}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-2 flex flex-col items-center">
                <button
                  onClick={addField}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Add Field
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormBuilder
