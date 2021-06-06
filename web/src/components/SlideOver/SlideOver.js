import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { routes, Link} from '@redwoodjs/router'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export default function Example({ showSidebar, isOpen, closeSidebar }) {
  const { currentUser, logOut, client, userMetadata} = useAuth()

  // Set the current dealership in the user metadata
  const currentDealership = currentUser.dealerships.find(dealership => {
    return dealership.id === userMetadata.user_metadata.currentDealership.id
  })

  const [ selected, setSelected ] = useState(currentDealership)

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const updateCurrentDealership = async (selection) => {
    setSelected(currentUser.dealerships.find(dealership => {
      return dealership.id === selection.id
    }))

    const apiUser = client.currentUser()
    // Its ok to update this from the client since the user can change this as
    await apiUser.update({data: {currentDealership: selection}})
    // Manually reset the user jwt with the udpated meta_data
    await apiUser.jwt(true)

    // This is a hack to make sure the app gets updated
    // TODO: come back to this
    window.location.reload()
  }

  if (!currentUser) return
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">

        <div className={`absolute inset-0 bg-gray-500 bg-opacity-75`} aria-hidden="true"></div>
      </Transition>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={isOpen} onClose={closeSidebar}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                          Profile
                        </h2>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-cyan-500"
                            onClick={() => closeSidebar()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                              alt=""
                            />
                          </div>
                          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div className="sm:flex-1">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">{currentUser.firstName} {currentUser.lastName}</h3>
                                </div>
                                <p className="text-sm text-gray-500">{currentUser.email}</p>
                              </div>
                              <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                <button onClick={logOut} type="button" className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:flex-1">
                                  Sign Out
                                </button>
                                <Link to={routes.profile({id: currentUser.id})} type="button" className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                  Edit Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
                          <div>
                            <div className="flex items-center">
                              <Listbox value={selected} onChange={updateCurrentDealership}>
                                {({ open }) => (
                                  <div className="container">
                                    <Listbox.Label className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Dealership</Listbox.Label>
                                    <div className="mt-1 relative">
                                      <Listbox.Button className="cursor-pointer bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
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
                                          className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                        >
                                          {currentUser.dealerships.map((dealership) => (
                                            <Listbox.Option
                                              key={dealership.id}
                                              className={({ active }) =>
                                                classNames(
                                                  active ? 'text-white bg-cyan-600' : 'text-gray-900',
                                                  'cursor-pointer select-none relative py-2 pl-3 pr-9'
                                                )
                                              }
                                              value={dealership}
                                            >
                                              {({ selected, active }) => (
                                                <>
                                                  <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {dealership.name}
                                                  </span>

                                                  {selected ? (
                                                    <span
                                                      className={classNames(
                                                        active ? 'text-white' : 'text-cyan-600',
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
                                  </div>
                                )}
                              </Listbox>
                            </div>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p>
                                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                                feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                                aenean arcu.
                              </p>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <time dateTime="1988-06-23">June 23, 1988</time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
