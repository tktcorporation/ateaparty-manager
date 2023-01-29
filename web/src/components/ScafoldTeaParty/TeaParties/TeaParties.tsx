import { MicrophoneIcon } from '@heroicons/react/24/outline'
import type { FindTeaParties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const TeaPartiesList = ({ teaParties }: FindTeaParties) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>開催日</th>
            <th>
              <MicrophoneIcon className="inline-flex h-4" />
              <span>司会者</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teaParties.map((teaParty) => (
            <tr key={teaParty.id}>
              <td>
                <div>
                  <div className="font-bold">
                    {new Date(teaParty.scheduledAt).toLocaleDateString('ja-JP')}
                  </div>
                  {/* <div className="text-sm opacity-50">United States</div> */}
                </div>
              </td>
              <td>
                {teaParty?.teaPartyStaff?.mcStaff?.name ||
                  'まだ決まってないよ！'}
              </td>
              <th>
                <Link
                  className="btn btn-ghost btn-xs"
                  to={routes.editTeaParty({ id: teaParty.id })}
                >
                  EDIT
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeaPartiesList
