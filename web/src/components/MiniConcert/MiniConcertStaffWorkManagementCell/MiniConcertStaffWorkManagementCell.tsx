import { useState } from 'react'

import type {
  FindMiniConcertStaffWorkManagementQuery,
  FindMiniConcertStaffWorkManagementQueryVariables,
  UpdateMiniConcertStaffWorkManagementMutation,
  UpdateMiniConcertStaffWorkManagementMutationVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import RadioButtonField from '../../RadioButtonField/RadioButtonField'
import { options } from '../constants'

export const QUERY = gql`
  query FindMiniConcertStaffWorkManagementQuery {
    miniConcertStaffWork: miniConcertStaffWork {
      management
    }
  }
`
export const UPDATE_MUTATION = gql`
  mutation UpdateMiniConcertStaffWorkManagementMutation(
    $input: UpdateMiniConcertStaffWorkInput!
  ) {
    updateMiniConcertStaffWork(input: $input) {
      management
    }
  }
`

export const Loading = () => (
  <div role="status" className="max-w-sm animate-pulse">
    <div className="flex items-center space-x-4">
      <div className="flex-1 space-y-1 py-1">
        <div className="h-4 w-3/4 rounded bg-gray-400"></div>
        <div className="h-4 rounded bg-gray-400"></div>
        <div className="h-4 w-5/6 rounded bg-gray-400"></div>
      </div>
    </div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMiniConcertStaffWorkManagementQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  miniConcertStaffWork,
}: CellSuccessProps<
  FindMiniConcertStaffWorkManagementQuery,
  FindMiniConcertStaffWorkManagementQueryVariables
>) => {
  const { management } = miniConcertStaffWork
  const [managementState, setManagementState] = useState(management)
  const [updateMiniConcertStaffWork, { loading }] = useMutation<
    UpdateMiniConcertStaffWorkManagementMutation,
    UpdateMiniConcertStaffWorkManagementMutationVariables
  >(UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('Updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  const handleChange = (v: string) => {
    if (v !== 'CanDo' && v !== 'TeachMe' && v !== 'NotNow') {
      throw new Error('Invalid value')
    }
    setManagementState(v)
    updateMiniConcertStaffWork({
      variables: {
        input: {
          management: v,
        },
      },
    })
  }

  return (
    <>
      <RadioButtonField
        name="staffWork[management]"
        options={options}
        loading={loading}
        value={managementState}
        setValue={handleChange}
      />
    </>
  )
}
