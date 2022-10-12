import type { FindConfirmedSubs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ConfirmedSubs from 'src/components/ConfirmedSub/ConfirmedSubs'

export const QUERY = gql`
  query FindConfirmedSubs {
    confirmedSubs {
      id
      sub
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No confirmedSubs yet. '}
      <Link
        to={routes.newConfirmedSub()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ confirmedSubs }: CellSuccessProps<FindConfirmedSubs>) => {
  return <ConfirmedSubs confirmedSubs={confirmedSubs} />
}
