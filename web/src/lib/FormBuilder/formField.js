import ListBox from 'src/lib/listBox'
import { TextField } from '@redwoodjs/forms'

const OPTIONS = [
  { id: 1, value: 'text' },
  { id: 2, value: 'number' },
  { id: 3, value: 'checkbox' },
]
const FormField = ({ row, idx, rowIndex, stateSchema, setStateSchema }) => {
  const updateField = (which, value) => {
    const ss = JSON.parse(JSON.stringify(stateSchema))
    const row = ss[idx].rows[rowIndex]
    row[which] = value
    ss[idx].rows[rowIndex] = row
    setStateSchema([...ss])
  }

  return (
    <div className="space-y-2">
      <ListBox options={OPTIONS} value={row.type} updateField={updateField} />
      <div>
        <label
          htmlFor={'yeet2'}
          className="block text-sm font-medium text-gray-700"
        >
          Label
        </label>
        <div className="mt-1">
          <TextField
            className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Field Label"
            aria-describedby="field-label"
            value={row.label}
            onChange={(evt) => updateField('label', evt.target.value)}
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500" id="field-label">
        This is the label that whill show up with the field in the ui to users.
      </p>
      <div>
        <label
          htmlFor={'yeet3'}
          className="block text-sm font-medium text-gray-700"
        >
          Form Field Name
        </label>
        <div className="mt-1">
          <TextField
            className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Field Name"
            aria-describedby="field-name"
            value={row.fieldName}
            onChange={(evt) => updateField('fieldName', evt.target.value)}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="field-name">
          This value must match the name of the field on the pdf for the
          corresponding contract.
        </p>
      </div>
    </div>
  )
}

export default FormField
