import type {
  DeleteTeaPartyMutationVariables,
  FindTeaPartyById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_TEA_PARTY_MUTATION = gql`
  mutation DeleteTeaPartyMutation($id: Int!) {
    deleteTeaParty(id: $id) {
      id
    }
  }
`

interface Props {
  teaParty: NonNullable<FindTeaPartyById['teaParty']>
}

const TeaParty = ({ teaParty }: Props) => {
  const [deleteTeaParty] = useMutation(DELETE_TEA_PARTY_MUTATION, {
    onCompleted: () => {
      toast.success('TeaParty deleted')
      navigate(routes.teaParties())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTeaPartyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete teaParty ' + id + '?')) {
      deleteTeaParty({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TeaParty {teaParty.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{teaParty.id}</td>
            </tr>
            <tr>
              <th>Scheduled at</th>
              <td>{timeTag(teaParty.scheduledAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeaParty({ id: teaParty.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(teaParty.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TeaParty
