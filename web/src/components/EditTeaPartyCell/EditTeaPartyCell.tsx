import type {
  FindTeaPartyWithStaffQuery,
  FindTeaPartyWithStaffQueryVariables,
  UpdateTeaPartyWithStaffInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EditTeaPartyForm from '../EditTeaPartyForm/EditTeaPartyForm'

export const QUERY = gql`
  query FindTeaPartyWithStaffQuery($id: Int!) {
    teaParty: teaParty(id: $id) {
      id
      scheduledAt
      teaPartyStaff {
        mcStaff {
          id
          name
        }
        mcSubStaff {
          id
          name
        }
      }
    }
  }
`

const UPDATE_TEA_PARTY_MUTATION = gql`
  mutation UpdateTeaPartyWithStaffMutation(
    $id: Int!
    $input: UpdateTeaPartyWithStaffInput!
  ) {
    updateTeaPartyWithStaff(id: $id, input: $input) {
      id
      scheduledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTeaPartyWithStaffQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  teaParty,
}: CellSuccessProps<
  FindTeaPartyWithStaffQuery,
  FindTeaPartyWithStaffQueryVariables
>) => {
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
    input: UpdateTeaPartyWithStaffInput,
    id: FindTeaPartyWithStaffQuery['teaParty']['id']
  ) => {
    console.log(input)
    updateTeaParty({ variables: { id, input } })
  }
  return (
    <div>
      <p>{JSON.stringify(teaParty)}</p>
      <EditTeaPartyForm
        teaParty={{
          id: teaParty.id,
          scheduledAt: teaParty.scheduledAt,
          mcStaffId: teaParty.teaPartyStaff?.mcStaff?.id,
          mcSubStaffId: teaParty.teaPartyStaff?.mcSubStaff?.id,
        }}
        members={[
          {
            id: 1,
            name: 'ほげ',
          },
          {
            id: 2,
            name: 'ふが',
          },
        ]}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </div>
  )
}
