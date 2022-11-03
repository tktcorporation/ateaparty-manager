import { useState } from 'react'

import type {
  FindMiniConcertStaffWorkVisitorGuideQuery,
  FindMiniConcertStaffWorkVisitorGuideQueryVariables,
  UpdateMiniConcertStaffWorkVisitorGuideMutation,
  UpdateMiniConcertStaffWorkVisitorGuideMutationVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import RadioButtonField from '../../RadioButtonField/RadioButtonField'
import { options } from '../constants'

export const QUERY = gql`
  query FindMiniConcertStaffWorkVisitorGuideQuery {
    miniConcertStaffWork: miniConcertStaffWork {
      visitorGuide
    }
  }
`
export const UPDATE_MUTATION = gql`
  mutation UpdateMiniConcertStaffWorkVisitorGuideMutation(
    $input: UpdateMiniConcertStaffWorkInput!
  ) {
    updateMiniConcertStaffWork(input: $input) {
      visitorGuide
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
}: CellFailureProps<FindMiniConcertStaffWorkVisitorGuideQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  miniConcertStaffWork,
}: CellSuccessProps<
  FindMiniConcertStaffWorkVisitorGuideQuery,
  FindMiniConcertStaffWorkVisitorGuideQueryVariables
>) => {
  const { visitorGuide } = miniConcertStaffWork
  const [VisitorGuideState, setVisitorGuideState] = useState(visitorGuide)
  const [updateMiniConcertStaffWork, { loading }] = useMutation<
    UpdateMiniConcertStaffWorkVisitorGuideMutation,
    UpdateMiniConcertStaffWorkVisitorGuideMutationVariables
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
    setVisitorGuideState(v)
    updateMiniConcertStaffWork({
      variables: {
        input: {
          visitorGuide: v,
        },
      },
    })
  }

  return (
    <>
      <RadioButtonField
        options={options}
        name="staffWork[VisitorGuide]"
        loading={loading}
        value={VisitorGuideState}
        setValue={handleChange}
      />
    </>
  )
}
