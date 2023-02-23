import { MicrophoneIcon } from '@heroicons/react/24/outline'

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
  const staffArea = mcStaffName ? (
    <>
      <p className="flex gap-7 self-center text-2xl">
        <span className="inline-flex items-center">
          <MicrophoneIcon className="h-5" />
          <span className="ml-1">司会</span>
        </span>
        <span className="">{mcStaffName || 'まだ決まってないよ！'}</span>
      </p>
      <p className="flex gap-7 self-center text-2xl">
        <span className="inline-flex items-center">
          <MicrophoneIcon className="h-5" />
          <span className="ml-1">サブ司会</span>
        </span>
        {mcSubStaffName || 'まだ決まってないよ！'}
      </p>
      <Link
        to={routes.editTeaParty({
          id,
        })}
        className="btn-outline btn self-center px-6"
      >
        変更
      </Link>
    </>
  ) : (
    <>
      <p className="flex gap-7 self-center text-2xl">
        誰が司会するか決めて登録してね！
      </p>
      <Link
        to={routes.editTeaParty({
          id,
        })}
        className="btn-outline btn self-center px-6"
      >
        司会を登録する
      </Link>
    </>
  )

  return (
    <div className="flex flex-col gap-5">
      <p className="text-4xl font-semibold tracking-wider">
        {scheduledAt.toLocaleDateString('ja-JP')}
      </p>
      {staffArea}
    </div>
  )
}

export default NextTeaParty
