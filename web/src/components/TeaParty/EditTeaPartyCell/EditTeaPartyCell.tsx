import type { EditTeaPartyById, UpdateTeaPartyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeaPartyForm from 'src/components/TeaParty/TeaPartyForm'

export const QUERY = gql`
  query EditTeaPartyById($id: Int!) {
    teaParty: teaParty(id: $id) {
      id
      scheduledAt
    }
  }
`
const UPDATE_TEA_PARTY_MUTATION = gql`
  mutation UpdateTeaPartyMutation($id: Int!, $input: UpdateTeaPartyInput!) {
    updateTeaParty(id: $id, input: $input) {
      id
      scheduledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ teaParty }: CellSuccessProps<EditTeaPartyById>) => {
  const [updateTeaParty, { loading, error }] = useMutation(
    UPDATE_TEA_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeaParty updated')
        navigate(routes.teaParties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTeaPartyInput,
    id: EditTeaPartyById['teaParty']['id']
  ) => {
    updateTeaParty({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TeaParty {teaParty?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TeaPartyForm teaParty={teaParty} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
