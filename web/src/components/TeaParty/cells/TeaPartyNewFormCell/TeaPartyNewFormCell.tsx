import { useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as TEAPARTIES_QUERY } from 'src/components/TeaParty/cells/TeaPartiesCell/TeaPartiesCell'
import TeaPartyForm, { FormTeaParty } from 'src/components/TeaPartyForm'

export const QUERY = gql`
  query CreateTeaParty {
    members {
      id
      name
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

export const Success = ({ members }) => {
  const formMethods = useForm<FormTeaParty>({ defaultValues: {} })
  const [createTeaParty, { loading, error }] = useMutation(
    CREATE_TEA_PARTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tea Party created')
        formMethods.reset()
      },
      refetchQueries: [{ query: TEAPARTIES_QUERY }],
    }
  )

  const onSave = (input) => {
    createTeaParty({ variables: { input } })
  }

  return (
    <TeaPartyForm
      onSave={onSave}
      formMethods={formMethods}
      members={members}
      loading={loading}
      error={error}
    />
  )
}
