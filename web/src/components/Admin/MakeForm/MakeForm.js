import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const MakeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.make?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="makeName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Make name
        </Label>
        <TextField
          name="makeName"
          defaultValue={props.make?.makeName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="makeName" className="rw-field-error" />

        <Label
          name="display"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Display
        </Label>
        <CheckboxField
          name="display"
          defaultChecked={props.make?.display}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="display" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MakeForm
