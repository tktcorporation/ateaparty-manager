import { MicrophoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

interface NextTeaPartyProps {
  id: number
  scheduledAt: Date
  mcStaffName: string | null
  mcSubStaffName?: string
}
const NextTeaParty = ({
  id,
  scheduledAt,
  mcStaffName,
  mcSubStaffName,
}: NextTeaPartyProps) => {
  return (
    <div>
      <p className="inline-flex items-center">
        <CalendarDaysIcon className="h-5" />
        <span className="ml-1">日付</span>
      </p>
      <p className="text-2xl">{scheduledAt.toLocaleDateString('ja-JP')}</p>
      <p className="mt-2 inline-flex items-center">
        <MicrophoneIcon className="h-5" />
        <span className="ml-1">司会</span>
      </p>
      <p className="text-2xl">{mcStaffName || 'まだ決まってないよ！'}</p>
      <p className="mt-2 inline-flex items-center">
        <MicrophoneIcon className="h-5" />
        <span className="ml-1">サブ司会</span>
      </p>
      <p>{mcSubStaffName || 'まだ決まってないよ！'}</p>
      <button className="btn btn-outline btn-sm mt-3">
        <Link
          to={routes.editTeaParty({
            id,
          })}
        >
          変更
        </Link>
      </button>
    </div>
  )
}

export default NextTeaParty
