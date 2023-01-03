import type {
  FindNextTeaPartyQuery,
  FindNextTeaPartyQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import NextTeaParty from '../NextTeaParty/NextTeaParty'

export const QUERY = gql`
  query FindNextTeaPartyQuery {
    nextTeaParty {
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
}: CellFailureProps<FindNextTeaPartyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  nextTeaParty,
}: CellSuccessProps<FindNextTeaPartyQuery, FindNextTeaPartyQueryVariables>) => {
  return (
    <NextTeaParty
      id={nextTeaParty.id}
      scheduledAt={new Date(nextTeaParty.scheduledAt)}
      mcStaffName={nextTeaParty?.teaPartyStaff?.mcStaff?.name}
    />
  )
}
