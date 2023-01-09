import { MicrophoneIcon } from '@heroicons/react/24/outline'
import type { FindTeaParties } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const TeaPartiesList = ({ teaParties }: FindTeaParties) => {
  return (
    <ul className="mt-4 grid grid-cols-3 gap-4">
      {teaParties.map((teaParty) => (
        <li key={teaParty.id}>
          <p className="text-lg">
            {new Date(teaParty.scheduledAt).toLocaleDateString('ja-JP')}
          </p>

          <p>
            <MicrophoneIcon className="inline-flex h-4" />
            <span className="ml-1">
              {teaParty?.teaPartyStaff?.mcStaff?.name || 'まだ決まってないよ！'}
            </span>
          </p>
          <Link to={routes.editTeaParty({ id: teaParty.id })}>
            司会者を選ぶ
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TeaPartiesList
