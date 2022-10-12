import type { FindConfirmedSubById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ConfirmedSub from 'src/components/ConfirmedSub/ConfirmedSub'

export const QUERY = gql`
  query FindConfirmedSubById($id: Int!) {
    confirmedSub: confirmedSub(id: $id) {
      id
      sub
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ConfirmedSub not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ confirmedSub }: CellSuccessProps<FindConfirmedSubById>) => {
  return <ConfirmedSub confirmedSub={confirmedSub} />
}
