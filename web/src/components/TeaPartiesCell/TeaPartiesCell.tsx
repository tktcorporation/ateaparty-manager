import type { TeaPartiesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query TeaPartiesQuery {
    teaParties {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ teaParties }: CellSuccessProps<TeaPartiesQuery>) => {
  return (
    <ul>
      {teaParties.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
