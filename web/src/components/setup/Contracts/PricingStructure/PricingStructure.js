import { navigate, routes } from '@redwoodjs/router'
import ContractNav from '../ContractNavigation'

import { NumberField, CheckboxField, Submit, Form } from '@redwoodjs/forms'
import { useState } from 'react'
import { useQuery } from '@redwoodjs/web'
import { useEffect } from 'react'

const ContractPricing = ({ formState, terms }) => {
  // const { loading, error, data } = useQuery(GET_TERMS, {
  //   fetchPolicy: 'network-only',
  // })
  // const [checkedContracts, setChecks] = useState({})

  // This is used to prepopulate the checkboxes
  // useEffect(() => {
  //   if (!data) return
  //   const checks = data.terms.reduce((acc, term) => {
  //     const name = `category_${term.id}`
  //     if (formValues[name]) {
  //       acc[name] = term
  //     }
  //     return acc
  //   }, {})
  //   setChecks(checks)
  // }, [data])

  // if (loading) {
  //   return '...fetching terms'
  // }

  // const handleChange = (term) => {
  //   return (event) => {
  //     const target = event.target
  //     const value = target.checked
  //     const name = target.name
  //     if (value) {
  //       setChecks({
  //         ...checkedContracts,
  //         [name]: term,
  //       })
  //     } else {
  //       const copy = { ...checkedContracts }
  //       delete copy[name]
  //       setChecks({
  //         ...copy,
  //       })
  //     }
  //   }
  // }

  // const hasCheckedContracts = () => {
  //   return Object.entries(checkedContracts).length > 0
  // }

  return (
    <div className="col-span-9">
      <ContractNav />

      <Form className="p-10">
        <div className="mt-10 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Terms and Condition
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                A Contracts TOC represents the the time in months or distance
                travelled that the warranty will cover. Example 3 Months / 30000
                Miles. Select from the available Terms and Conditions or create
                a new one.
              </p>
              <button
                className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() =>
                  navigate(
                    routes.contractGeneratorTermNew({ backTo: 'contract' })
                  )
                }
              >
                Create New TOC
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <div className="grid grid-cols-3 ">
                    {terms.map((term) => {
                      return (
                        <div
                          key={`terms_${term.name}`}
                          className="mt-3 flex items-start"
                        >
                          <div className="h-5 flex items-center">
                            <CheckboxField
                              id={term.name}
                              name={`category_${term.id}`}
                              // onChange={handleChange(term)}
                              className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={term.name}
                              className="font-medium text-gray-700"
                            >
                              {term.name}
                            </label>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Set Prices
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                For each of the terms and conditions checked above, assign a
                price that the contract at this term and condition will be sold
                for.
              </p>
            </div>
          </div>
          {/* <div
          className={`mt-5 md:mt-0 md:col-span-2 ${
            !hasCheckedContracts() ? 'flex justify-center items-center' : ''
          }`}
        >
          {!hasCheckedContracts() && (
            <p className="text-lg font-medium leading-6 text-gray-900">
              Select Terms and Conditions to add Prices
            </p>
          )}
          {hasCheckedContracts() && (
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <ul className="price_list divide-y divide-gray-200 max-h-96 overflow-auto pb-1">
                  <div className="grid grid-cols-3 gap-6 pl-1">
                    {Object.entries(checkedContracts).map(([id, term]) => {
                      return (
                        <li
                          className="col-span-3 sm:col-span-2"
                          key={`priceInput${id}`}
                        >
                          <label
                            htmlFor={`priceInput_${term.name}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            {term.name}
                          </label>
                          <div className="mt-1">
                            <NumberField
                              name={`priceInput_${term.id}`}
                              id={`priceInput_${term.name}`}
                              className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder={`Set contract price for ${term.name}`}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div> */}
        </div>
      </Form>
    </div>
  )
}

export default ContractPricing
