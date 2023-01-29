import type { FindTeaParties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeaParties from 'src/components/ScafoldTeaParty/TeaParties'

export const QUERY = gql`
  query FindTeaParties {
    teaParties {
      id
      scheduledAt
      teaPartyStaff {
        mcStaff {
          id
          name
          pictureUrl
        }
        mcSubStaff {
          id
          name
          pictureUrl
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <Link className="btn-outline btn-primary btn" to={routes.teaParty()}>
      お茶会の予定を作成する
    </Link>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ teaParties }: CellSuccessProps<FindTeaParties>) => {
  return <TeaParties teaParties={teaParties} />
}
