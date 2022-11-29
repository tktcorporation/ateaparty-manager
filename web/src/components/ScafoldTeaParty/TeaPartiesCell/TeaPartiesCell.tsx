import type { FindTeaParties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeaParties from 'src/components/ScafoldTeaParty/TeaParties'

export const QUERY = gql`
  query FindTeaParties {
    teaParties {
      id
      scheduledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teaParties yet. '}
      <Link to={routes.newTeaParty()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ teaParties }: CellSuccessProps<FindTeaParties>) => {
  return <TeaParties teaParties={teaParties} />
}
