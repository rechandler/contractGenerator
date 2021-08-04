import { CheckIcon } from '@heroicons/react/solid'
import { navigate } from '@redwoodjs/router'
import { useState } from 'react'

const ContractNav = () => {
  const [formState, setFormState] = useState({
    currentStep: 1,
    steps: [
      {
        id: 1,
        route: 'contractGeneratorContractBasicInfo',
        path: 'basic_info',
        name: 'Contract Details',
        completed: false,
      },
      {
        id: 2,
        route: 'contractGeneratorContractPricingStructure',
        path: 'pricing_structure',
        name: 'Pricing Structure',
        completed: false,
      },
      { id: 3, path: 'contract_data', name: 'Contract Data', completed: false },
      { id: 4, path: 'upload', name: 'Upload', completed: false },
    ],
  })

  const formNav = (id) => {
    setFormState({
      ...formState,
      currentStep: id,
    })
  }

  const pageIs = (pageName) => {
    return window.location.href.includes(pageName)
  }

  return (
    <div className="mt-10">
      <nav aria-label="Progress">
        <ol className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
          {formState.steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {pageIs(step.path) ? (
                <a
                  onClick={() => navigate(r)}
                  className=" cursor-pointer px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full">
                    <span className="text-cyan-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-cyan-600">
                    {step.name}
                  </span>
                </a>
              ) : step.completed ? (
                <a
                  onClick={() => formNav(step.id)}
                  className="cursor-pointer group flex items-center w-full"
                >
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full group-hover:bg-cyan-800">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : (
                <a
                  onClick={() => formNav(step.id)}
                  className="cursor-pointer group flex items-center"
                >
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== formState.steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default ContractNav
