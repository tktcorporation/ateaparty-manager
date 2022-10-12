import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditConfirmedSubById, UpdateConfirmedSubInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormConfirmedSub = NonNullable<EditConfirmedSubById['confirmedSub']>

interface ConfirmedSubFormProps {
  confirmedSub?: EditConfirmedSubById['confirmedSub']
  onSave: (data: UpdateConfirmedSubInput, id?: FormConfirmedSub['id']) => void
  error: RWGqlError
  loading: boolean
}

const ConfirmedSubForm = (props: ConfirmedSubFormProps) => {
  const onSubmit = (data: FormConfirmedSub) => {
  
    
    
  
    props.onSave(data, props?.confirmedSub?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormConfirmedSub> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="sub"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sub
        </Label>
        
          <TextField
            name="sub"
            defaultValue={props.confirmedSub?.sub}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="sub" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ConfirmedSubForm
