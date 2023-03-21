import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

const CREATE_MEMBER = gql`
  mutation CreateMember {
    createMember {
      id
      sub
      name
      avatar
      createdAt
      updatedAt
    }
  }
`

export const useMemberRegistration = () => {
  const { reauthenticate } = useAuth()
  const [createMember, { loading, error }] = useMutation(CREATE_MEMBER, {
    onCompleted: () => {
      toast.success('メンバー登録が完了しました')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    loading,
    error,
    createMember: async () => {
      await createMember()
      reauthenticate()
    },
  }
}
