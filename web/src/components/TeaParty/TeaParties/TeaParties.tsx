import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TeaParty/TeaPartiesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteTeaPartyMutationVariables, FindTeaParties } from 'types/graphql'

const DELETE_TEA_PARTY_MUTATION = gql`
  mutation DeleteTeaPartyMutation($id: Int!) {
    deleteTeaParty(id: $id) {
      id
    }
  }
`

const TeaPartiesList = ({ teaParties }: FindTeaParties) => {
  const [deleteTeaParty] = useMutation(DELETE_TEA_PARTY_MUTATION, {
    onCompleted: () => {
      toast.success('TeaParty deleted')
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

  const onDeleteClick = (id: DeleteTeaPartyMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete teaParty ' + id + '?')) {
      deleteTeaParty({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Scheduled at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teaParties.map((teaParty) => (
            <tr key={teaParty.id}>
              <td>{truncate(teaParty.id)}</td>
              <td>{timeTag(teaParty.scheduledAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.teaParty({ id: teaParty.id })}
                    title={'Show teaParty ' + teaParty.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTeaParty({ id: teaParty.id })}
                    title={'Edit teaParty ' + teaParty.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete teaParty ' + teaParty.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(teaParty.id)}
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

export default TeaPartiesList
