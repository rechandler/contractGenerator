import BaseContractData from './baseContract'
import { TextField, CheckboxField, Submit } from '@redwoodjs/forms'
import FormBuilder from 'src/lib/FormBuilder/FormBuilder'
import { useState } from 'react'

const ContractData = ({ updateForm, formState, formMethods }) => {
  const [formBuilder, setFormBuilder] = useState({
    schema: '',
    uischema: '',
  })

  return (
    <div className={formState.currentStep === 3 ? '' : 'hidden'}>
      <div className="col-span-9 bg-gray-50">
        <FormBuilder
          schema={formBuilder.schema}
          uischema={formBuilder.uischema}
          onChange={(newSchema, newUiSchema) => {
            setFormBuilder({
              schema: newSchema,
              uischema: newUiSchema,
            })
          }}
          formMethods={formMethods}
          updateForm={updateForm}
        />
      </div>
    </div>
  )
}

export default ContractData
