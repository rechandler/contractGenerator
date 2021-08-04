import ContractNav from './contractnav'
import ContractDetails from './contractDetails'
import ContractPricing from './contractPricing'
import ContractData from './contractData'
import ContractUpload from './contractUpload'
import { Form, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import { addCreateFormValues } from 'src/slices/createContract'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

const ContractFormMain = () => {
  const dispatch = useDispatch()
  const formValues = useSelector((state) => state.createContract.form)
  const formMethods = useForm({
    defaultValues: formValues,
  })

  const [formState, setFormState] = useState({
    allComplete: false,
    currentStep: 1,
    steps: [
      { id: 1, name: 'Contract Details', completed: false },
      { id: 2, name: 'Pricing Structure', completed: false },
      { id: 3, name: 'Contract Data', completed: false },
      { id: 4, name: 'Upload', completed: false },
    ],
  })

  const nextStep = () => {
    updateForm()
    setFormState({
      ...formState,
      currentStep: formState.currentStep + 1,
    })
  }

  const updateForm = () => {
    dispatch(addCreateFormValues(formMethods.getValues()))
  }

  const onSubmit = () => {
    console.log('submitting')
  }

  const onChange = (evt) => {
    console.log(evt)
  }

  return (
    <>
      <ContractNav formState={formState} setFormState={setFormState} />
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <ContractDetails formState={formState} />
        <ContractPricing formState={formState} formValues={formValues} />
        <ContractData
          formState={formState}
          formValues={formValues}
          formMethods={formMethods}
          updateForm={updateForm}
        />
        <ContractUpload formState={formState} />

        <div className="col-span-3 px-4 py-3 bg-gray-50 text-right sm:px-6">
          {formState.allComplete && (
            <Submit className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              Submit
            </Submit>
          )}
          {!formState.allComplete && (
            <button
              onClick={nextStep}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Next
            </button>
          )}
        </div>
      </Form>
    </>
  )
}

export default ContractFormMain
