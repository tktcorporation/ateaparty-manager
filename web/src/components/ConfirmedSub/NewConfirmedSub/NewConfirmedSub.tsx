import type { CreateConfirmedSubInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ConfirmedSubForm from 'src/components/ConfirmedSub/ConfirmedSubForm'

const CREATE_CONFIRMED_SUB_MUTATION = gql`
  mutation CreateConfirmedSubMutation($input: CreateConfirmedSubInput!) {
    createConfirmedSub(input: $input) {
      id
    }
  }
`

const NewConfirmedSub = () => {
  const [createConfirmedSub, { loading, error }] = useMutation(
    CREATE_CONFIRMED_SUB_MUTATION,
    {
      onCompleted: () => {
        toast.success('ConfirmedSub created')
        navigate(routes.confirmedSubs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateConfirmedSubInput) => {
    createConfirmedSub({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ConfirmedSub</h2>
      </header>
      <div className="rw-segment-main">
        <ConfirmedSubForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConfirmedSub
