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
    pictureUrl: string
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
        className="label"
        errorClassName="rw-label rw-label-error"
      >
        開催日
      </Label>

      <DateField
        name="scheduledAt"
        defaultValue={formatDate(props.teaParty?.scheduledAt)}
        className="input input-bordered w-full max-w-xs"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="scheduledAt" className="rw-field-error" />

      <Label
        name="mcStaffId"
        className="label"
        errorClassName="rw-label rw-label-error"
      >
        司会者
      </Label>

      <SelectField
        name="mcStaffId"
        defaultValue={props.teaParty?.mcStaffId?.toString()}
        className="select select-bordered w-full max-w-xs"
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

      <div className="mt-5">
        <Submit disabled={props.loading} className="btn btn-primary">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default EditTeaPartyForm
