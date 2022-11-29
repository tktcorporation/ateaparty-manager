import type {
  FindTeaPartyQuery,
  FindTeaPartyQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTeaPartyQuery($id: Int!) {
    teaParty: teaParty(id: $id) {
      id
      scheduledAt
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
  return <div>{JSON.stringify(teaParty)}</div>
}
