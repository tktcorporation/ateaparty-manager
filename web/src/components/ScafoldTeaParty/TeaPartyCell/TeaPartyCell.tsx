import type { FindTeaPartyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeaParty from 'src/components/ScafoldTeaParty/TeaParty'

export const QUERY = gql`
  query FindTeaPartyById($id: Int!) {
    teaParty: teaParty(id: $id) {
      id
      scheduledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TeaParty not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ teaParty }: CellSuccessProps<FindTeaPartyById>) => {
  return <TeaParty teaParty={teaParty} />
}
