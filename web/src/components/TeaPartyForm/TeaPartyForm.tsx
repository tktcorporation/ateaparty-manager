import type { EditTeaPartyById, UpdateTeaPartyInput } from 'types/graphql'

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

const formatDatetime = (value?: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString().replace(/\.\d{3}\w$/, '')
  } else if (typeof value === 'string') {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormTeaParty = NonNullable<EditTeaPartyById['teaParty']>

interface TeaPartyFormProps {
  teaParty?: {
    id: number
    hostId: number
    cohostId: number
    date: string
  }
  members: { id: number; name: string }[]
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
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          開催日
        </Label>

        <DateField
          name="date"
          defaultValue={formatDatetime(props.teaParty?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="hostId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          司会
        </Label>

        <SelectField
          name="hostId"
          defaultValue={props.teaParty?.hostId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          // valueAsNumber
          validation={{ required: true, valueAsNumber: true }}
        >
          <option value="">この回の司会は…</option>
          {props.members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </SelectField>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            保存
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeaPartyForm
