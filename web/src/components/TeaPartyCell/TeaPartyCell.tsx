import type {
  FindTeaPartyQuery,
  FindTeaPartyQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import NextTeaParty from '../NextTeaParty/NextTeaParty'

export const QUERY = gql`
  query FindTeaPartyQuery($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTeaPartyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  teaParty,
}: CellSuccessProps<FindTeaPartyQuery, FindTeaPartyQueryVariables>) => {
  return (
    <NextTeaParty
      id={teaParty.id}
      scheduledAt={new Date(teaParty.scheduledAt)}
      mcStaffName={teaParty?.teaPartyStaff?.mcStaff?.name}
    />
  )
}
