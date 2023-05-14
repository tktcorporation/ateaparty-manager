import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeaPartyForm from 'src/components/TeaPartyForm'

export const QUERY = gql`
  query EditTeaPartyById($id: Int!) {
    teaParty: teaParty(id: $id) {
      id
      hostId
      cohostId
      date
    }
    members {
      id
      name
    }
  }
`

const UPDATE_TEA_PARTY_MUTATION = gql`
  mutation UpdateTeaPartyMutation($id: Int!, $input: UpdateTeaPartyInput!) {
    updateTeaParty(id: $id, input: $input) {
      id
    }
  }
`

const CREATE_TEA_PARTY_MUTATION = gql`
  mutation CreateTeaPartyMutation($input: CreateTeaPartyInput!) {
    createTeaParty(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No teaParty yet. '}</div>
}

export const Success = ({ teaParty, members }) => {
  const [updateTeaParty, { loading, error }] = useMutation(
    UPDATE_TEA_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tea Party updated')
      },
    }
  )

  const [createTeaParty, { loading: createLoading, error: createError }] =
    useMutation(CREATE_TEA_PARTY_MUTATION, {
      onCompleted: () => {
        toast.success('Tea Party created')
      },
    })

  const onSave = (input, id) => {
    if (id) {
      updateTeaParty({ variables: { id, input } })
    } else {
      createTeaParty({ variables: { input } })
    }
  }

  const isLoading = loading || createLoading
  const finalError = error || createError

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Tea Party {teaParty?.id ? 'Edit' : 'Create'}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TeaPartyForm
          teaParty={teaParty}
          members={members}
          onSave={onSave}
          loading={isLoading}
          error={finalError}
        />
      </div>
    </div>
  )
}
