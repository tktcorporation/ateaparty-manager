import type { UpdateTeaPartyWithStaffInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  DateField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

interface TeaPartyFormProps {
  teaParty: UpdateTeaPartyWithStaffInput & {
    id: number
  }
  members: {
    id: number
    name: string
  }[]
  onSave: (data: UpdateTeaPartyWithStaffInput, id: number) => void
  error: RWGqlError
  loading: boolean
}
const formatDate = (value: string | null | undefined) => {
  if (value) {
    return value.replace(/T.*$/, '')
  }
}
type FormTeaParty = UpdateTeaPartyWithStaffInput

const EditTeaPartyForm = (props: TeaPartyFormProps) => {
  const onSubmit = (data: FormTeaParty) => {
    console.log(__filename, `onSubmit: ${JSON.stringify(data)}`)
    props.onSave(data, props.teaParty.id)
  }
  console.log(__filename, `props: ${JSON.stringify(props)}`)
  return (
    <Form onSubmit={onSubmit} error={props.error}>
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
        開催日
      </Label>

      <DateField
        name="scheduledAt"
        defaultValue={formatDate(props.teaParty?.scheduledAt)}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="scheduledAt" className="rw-field-error" />

      <Label
        name="mcStaffId"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        司会者
      </Label>

      <SelectField
        name="mcStaffId"
        defaultValue={props.teaParty?.mcStaffId?.toString()}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ valueAsNumber: true, required: true }}
      >
        <option value="">選択してください</option>
        {props.members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </SelectField>

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="btn btn-primary">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default EditTeaPartyForm
