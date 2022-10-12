
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteConfirmedSubMutationVariables, FindConfirmedSubById } from 'types/graphql'

const DELETE_CONFIRMED_SUB_MUTATION = gql`
  mutation DeleteConfirmedSubMutation($id: Int!) {
    deleteConfirmedSub(id: $id) {
      id
    }
  }
`

interface Props {
  confirmedSub: NonNullable<FindConfirmedSubById['confirmedSub']>
}

const ConfirmedSub = ({ confirmedSub }: Props) => {
  const [deleteConfirmedSub] = useMutation(DELETE_CONFIRMED_SUB_MUTATION, {
    onCompleted: () => {
      toast.success('ConfirmedSub deleted')
      navigate(routes.confirmedSubs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteConfirmedSubMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete confirmedSub ' + id + '?')) {
      deleteConfirmedSub({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ConfirmedSub {confirmedSub.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{confirmedSub.id}</td>
            </tr><tr>
              <th>Sub</th>
              <td>{confirmedSub.sub}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editConfirmedSub({ id: confirmedSub.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(confirmedSub.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ConfirmedSub
