import ContractNav from './contractnav'
import ContractDetails from './contractDetails'
import ContractPricing from './contractPricing'
import { Form, Submit } from '@redwoodjs/forms'
import { useState } from 'react'

const ContractFormMain = () => {

  const [formState, setFormState] = useState({
    allComplete: false,
    currentStep: 1,
    steps: [
      { id: 1, name: 'Contract Details', completed: false },
      { id: 2, name: 'Pricing Structure', completed: false },
      { id: 3, name: 'Preview', completed: false },
    ]
  })

  const nextStep = () => {
    setFormState({
      ...formState,
      currentStep: formState.currentStep + 1,
    })
  }

  console.log(formState)

  const onSubmit = () => {
    console.log("submitting")
  }

  return (
    <>
      <ContractNav formState={formState} setFormState={setFormState} />
      <Form onSubmit={onSubmit}>
        <ContractDetails formState={formState} />
        <ContractPricing formState={formState} />

        <div className="col-span-3 px-4 py-3 bg-gray-50 text-right sm:px-6">
          {formState.allComplete && <Submit
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Submit
         </Submit>}
         {!formState.allComplete && <button
            type="button"
            onClick={nextStep}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Next
         </button>}
        </div>
      </Form>
    </>
  )
}

export default ContractFormMain
