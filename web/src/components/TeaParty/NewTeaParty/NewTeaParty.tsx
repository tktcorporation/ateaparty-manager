import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeaPartyForm from 'src/components/TeaParty/TeaPartyForm'

import type { CreateTeaPartyInput } from 'types/graphql'

const CREATE_TEA_PARTY_MUTATION = gql`
  mutation CreateTeaPartyMutation($input: CreateTeaPartyInput!) {
    createTeaParty(input: $input) {
      id
    }
  }
`

const NewTeaParty = () => {
  const [createTeaParty, { loading, error }] = useMutation(
    CREATE_TEA_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeaParty created')
        navigate(routes.teaParties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTeaPartyInput) => {
    createTeaParty({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TeaParty</h2>
      </header>
      <div className="rw-segment-main">
        <TeaPartyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTeaParty
