import type { EditTeaPartyById, UpdateTeaPartyInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  DateField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormTeaParty = NonNullable<EditTeaPartyById['teaParty']>

interface TeaPartyFormProps {
  teaParty?: EditTeaPartyById['teaParty']
  onSave: (data: UpdateTeaPartyInput, id?: FormTeaParty['id']) => void
  error: RWGqlError
  loading: boolean
}

const TeaPartyForm = (props: TeaPartyFormProps) => {
  const onSubmit = (data: FormTeaParty) => {
    props.onSave(data, props?.teaParty?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTeaParty> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="scheduledAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Scheduled at
        </Label>

        <DateField
          name="scheduledAt"
          defaultValue={formatDatetime(props.teaParty?.scheduledAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="scheduledAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeaPartyForm
