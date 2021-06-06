import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import ModelsCell from '../ModelsCell/ModelsCell'
import { useQuery } from '@redwoodjs/web'
import { QUERY as CATEGORY_QUERY } from '../../Categories/CategoriesCell/CategoriesCell'

const notSelectedOption = {
  id: null,
  makeName: 'Please Select manufacturer',
  disabled: true
}

const Makes = ({ makes }) => {
  makes = [notSelectedOption, ...makes]
  const [selected, setSelected] = useState(makes[0])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleSelect = (value) => {
    setSelected(value)
  }

  return (
    <div className="col-span-9 bg-gray-50">
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Makes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Select a Manufacturer below to assign contract categories to models
              </p>
              <Listbox value={selected} onChange={handleSelect}>
                {({ open }) => (
                  <>
                      {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
                    <div className="mt-5 relative">
                      <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.makeName}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                          {makes.map((make) => (
                            <Listbox.Option
                              key={make.id}
                              className={({ active }) =>
                                classNames(
                                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                  'cursor-pointer select-none relative py-2 pl-3 pr-9'
                                )
                              }
                              disabled={!make.id}
                              value={make}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {make.makeName}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {selected.id && <ModelsCell id={selected.id} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Makes
