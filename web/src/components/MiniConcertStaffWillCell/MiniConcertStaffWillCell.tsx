import type {
  FindMiniConcertStaffWillQuery,
  FindMiniConcertStaffWillQueryVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMiniConcertStaffWillQuery {
    miniConcertStaffWill: miniConcertStaffWill {
      StaffWantToDo
    }
  }
`
export const MUTATION = gql`
  mutation CreateMiniConcertStaffWillMutation(
    $input: CreateMiniConcertStaffWillInput!
  ) {
    createMiniConcertStaffWill(input: $input) {
      StaffWantToDo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const [create, { loading, error }] = useMutation(MUTATION)
  const onSave = (input) => {
    create({ variables: { input } })
  }
  return (
    <div>
      <button onClick={() => onSave({ StaffWantToDo: 'test' })}>test</button>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindMiniConcertStaffWillQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  miniConcertStaffWill,
}: CellSuccessProps<
  FindMiniConcertStaffWillQuery,
  FindMiniConcertStaffWillQueryVariables
>) => {
  return <div>{JSON.stringify(miniConcertStaffWill)}</div>
}
