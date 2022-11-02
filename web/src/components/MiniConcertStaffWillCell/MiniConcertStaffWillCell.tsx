import type {
  FindMiniConcertStaffWillQuery,
  FindMiniConcertStaffWillQueryVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ToggleField from '../ToggleField/ToggleField'

export const QUERY = gql`
  query FindMiniConcertStaffWillQuery {
    miniConcertStaffWill: miniConcertStaffWill {
      staffWill
    }
  }
`

export const UPSERT_MUTATION = gql`
  mutation UpsertMiniConcertStaffWillMutation(
    $input: UpsertMiniConcertStaffWillInput!
  ) {
    upsertMiniConcertStaffWill(input: $input) {
      staffWill
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const [upsertMiniConcertStaffWill, { loading, error }] = useMutation(
    UPSERT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Saved')
      },
    }
  )
  const [staffWill, setStaffWill] = React.useState(false)

  const handleOnChange = (v: boolean) => {
    console.log('input', v)
    setStaffWill(v)
    upsertMiniConcertStaffWill({ variables: { input: { staffWill: v } } })
  }

  return (
    <ToggleField
      loading={loading}
      label="スタッフ参加を希望する"
      name="staffWill"
      checked={staffWill}
      onChange={handleOnChange}
    />
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
  const [upsertMiniConcertStaffWill, { loading, error }] = useMutation(
    UPSERT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Saved')
      },
    }
  )
  const [staffWill, setStaffWill] = React.useState(
    miniConcertStaffWill.staffWill
  )

  const handleOnChange = (v: boolean) => {
    console.log('input', v)
    setStaffWill(v)
    upsertMiniConcertStaffWill({ variables: { input: { staffWill: v } } })
  }

  return (
    <ToggleField
      loading={loading}
      label="スタッフ参加を希望する"
      name="staffWill"
      checked={staffWill}
      onChange={handleOnChange}
    />
  )
}
