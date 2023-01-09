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
          pictureUrl
        }
      }
    }
    members: members {
      id
      name
      pictureUrl
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

export const Loading = () => (
  <div role="status" className="max-w-sm ">
    <svg
      className="-ml-1 mr-3 h-5 w-5 animate-spin text-gray-500"
      viewBox="0 0 24 24"
    ></svg>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTeaPartyWithStaffQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  teaParty,
  members,
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
    updateTeaParty({ variables: { id, input } })
  }
  return (
    <div>
      <EditTeaPartyForm
        teaParty={{
          id: teaParty.id,
          scheduledAt: teaParty.scheduledAt,
          mcStaffId: teaParty.teaPartyStaff?.mcStaff?.id,
          mcSubStaffId: teaParty.teaPartyStaff?.mcSubStaff?.id,
        }}
        members={members}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </div>
  )
}
