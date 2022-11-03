import { useState } from 'react'

import type {
  FindMiniConcertStaffWorkPhotographyQuery,
  FindMiniConcertStaffWorkPhotographyQueryVariables,
  UpdateMiniConcertStaffWorkPhotographyMutation,
  UpdateMiniConcertStaffWorkPhotographyMutationVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import RadioButtonField from '../../RadioButtonField/RadioButtonField'
import { options } from '../constants'

export const QUERY = gql`
  query FindMiniConcertStaffWorkPhotographyQuery {
    miniConcertStaffWork: miniConcertStaffWork {
      photography
    }
  }
`
export const UPDATE_MUTATION = gql`
  mutation UpdateMiniConcertStaffWorkPhotographyMutation(
    $input: UpdateMiniConcertStaffWorkInput!
  ) {
    updateMiniConcertStaffWork(input: $input) {
      photography
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
}: CellFailureProps<FindMiniConcertStaffWorkPhotographyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  miniConcertStaffWork,
}: CellSuccessProps<
  FindMiniConcertStaffWorkPhotographyQuery,
  FindMiniConcertStaffWorkPhotographyQueryVariables
>) => {
  const { photography } = miniConcertStaffWork
  const [photographyState, setPhotographyState] = useState(photography)
  const [updateMiniConcertStaffWork, { loading }] = useMutation<
    UpdateMiniConcertStaffWorkPhotographyMutation,
    UpdateMiniConcertStaffWorkPhotographyMutationVariables
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
    setPhotographyState(v)
    updateMiniConcertStaffWork({
      variables: {
        input: {
          photography: v,
        },
      },
    })
  }

  return (
    <>
      <RadioButtonField
        options={options}
        name="staffWork[Photography]"
        loading={loading}
        value={photographyState}
        setValue={handleChange}
      />
    </>
  )
}
