import type { EditConfirmedSubById, UpdateConfirmedSubInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConfirmedSubForm from 'src/components/ConfirmedSub/ConfirmedSubForm'

export const QUERY = gql`
  query EditConfirmedSubById($id: Int!) {
    confirmedSub: confirmedSub(id: $id) {
      id
      sub
    }
  }
`
const UPDATE_CONFIRMED_SUB_MUTATION = gql`
  mutation UpdateConfirmedSubMutation($id: Int!, $input: UpdateConfirmedSubInput!) {
    updateConfirmedSub(id: $id, input: $input) {
      id
      sub
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ confirmedSub }: CellSuccessProps<EditConfirmedSubById>) => {
  const [updateConfirmedSub, { loading, error }] = useMutation(
    UPDATE_CONFIRMED_SUB_MUTATION,
    {
      onCompleted: () => {
        toast.success('ConfirmedSub updated')
        navigate(routes.confirmedSubs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateConfirmedSubInput,
    id: EditConfirmedSubById['confirmedSub']['id']
  ) => {
    updateConfirmedSub({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ConfirmedSub {confirmedSub?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ConfirmedSubForm confirmedSub={confirmedSub} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
