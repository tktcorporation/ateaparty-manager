import type {
  DeleteConfirmedSubMutationVariables,
  FindConfirmedSubs,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ConfirmedSub/ConfirmedSubsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_CONFIRMED_SUB_MUTATION = gql`
  mutation DeleteConfirmedSubMutation($id: Int!) {
    deleteConfirmedSub(id: $id) {
      id
    }
  }
`

const ConfirmedSubsList = ({ confirmedSubs }: FindConfirmedSubs) => {
  const [deleteConfirmedSub] = useMutation(DELETE_CONFIRMED_SUB_MUTATION, {
    onCompleted: () => {
      toast.success('ConfirmedSub deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteConfirmedSubMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete confirmedSub ' + id + '?')) {
      deleteConfirmedSub({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sub</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {confirmedSubs.map((confirmedSub) => (
            <tr key={confirmedSub.id}>
              <td>{truncate(confirmedSub.id)}</td>
              <td>{truncate(confirmedSub.sub)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.confirmedSub({ id: confirmedSub.id })}
                    title={'Show confirmedSub ' + confirmedSub.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editConfirmedSub({ id: confirmedSub.id })}
                    title={'Edit confirmedSub ' + confirmedSub.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete confirmedSub ' + confirmedSub.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(confirmedSub.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConfirmedSubsList
