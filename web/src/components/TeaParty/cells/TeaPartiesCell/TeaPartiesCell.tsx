import { format, formatDistanceToNow } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const QUERY = gql`
  query TeaPartiesQuery {
    teaParties: teaPartiesNotYetHeld {
      id
      host {
        id
        avatar
        name
      }
      cohost {
        id
        avatar
        name
      }
      date
    }
    members {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

type TeaPartiesCellProps = {
  teaParties: Array<{
    id: number
    host: {
      id: number
      avatar: string
      name: string
    }
    cohost: {
      id: number

      avatar: string

      name: string
    }

    date: string
  }>

  members: Array<{
    id: number

    name: string
  }>
}

export const Success = ({ teaParties }: TeaPartiesCellProps) => {
  // 直近の予定を取得
  const nearestTeaParty = teaParties && teaParties[0]

  // 直近の予定以外を取得
  const teaPartiesWithoutNearest = teaParties.slice(1)

  // 直近の予定の日付
  const nearestPartyDate = nearestTeaParty
    ? new Date(nearestTeaParty.date)
    : null

  // 直近の予定までの残り日数
  const daysRemaining = nearestPartyDate
    ? formatDistanceToNow(nearestPartyDate, { addSuffix: true, locale: ja })
    : null

  return (
    <>
      {nearestTeaParty ? (
        <div className="mb-4 rounded-lg bg-white">
          <div className="flex items-end">
            <h2 className="text-3xl font-medium">次回のお茶会は</h2>
            <div className="ml-4 text-3xl">
              {daysRemaining && (
                <div className="text-lg">... {daysRemaining}</div>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex w-60 items-end">
              <div className="text-3xl">{format(nearestPartyDate, 'M')}</div>
              <div className="text-xl">月</div>
              <div className="text-3xl">{format(nearestPartyDate, 'd')}</div>
              <div className="text-xl">日</div>
            </div>
            <div className="ml-12 flex items-center space-x-6">
              <div className="flex items-center text-xl ">
                <div>司会</div>
                <img
                  src={nearestTeaParty.host.avatar}
                  className="ml-3 h-16 w-16 rounded-md"
                  alt={nearestTeaParty.host.name}
                />
              </div>
              <div className="ml-6 flex items-center text-xl ">
                <div> サブ司会</div>
                <div className="ml-3">
                  {(nearestTeaParty.cohost?.avatar && (
                    <>
                      <img
                        src={nearestTeaParty.cohost.avatar}
                        className="h-16 w-16 rounded-md"
                        alt={nearestTeaParty.cohost.name}
                      />
                    </>
                  )) || (
                    // 画像がない場合は同じ大きさの枠を表示して、中央に？マークを表示
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                      <div className="text-2xl text-gray-400">?</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-2 text-lg">No upcoming tea parties</div>
      )}

      <div className="mt-20">
        {teaPartiesWithoutNearest.map((teaParty) => (
          <div key={teaParty.id} className="sm:x-full mb-6 flex items-center">
            <div className="flex w-60 items-center">
              <div className="flex items-end justify-center">
                <div className="text-3xl">
                  {format(new Date(teaParty.date), 'M')}
                </div>
                <div className="text-xl">月</div>
                <div className="text-3xl">
                  {format(new Date(teaParty.date), 'd')}
                </div>

                <div className="text-xl">日</div>
              </div>
            </div>
            <div className="ml-12 flex items-center space-x-6 text-xl">
              <div className="flex items-center text-xl ">
                <div>司会</div>
                <img
                  src={teaParty.host.avatar}
                  className="ml-3 h-16 w-16 rounded-md"
                  alt={teaParty.host.name}
                />
              </div>

              <div className="flex items-center text-xl ">
                <div> サブ司会</div>
                <div className="ml-3">
                  {(teaParty.cohost?.avatar && (
                    <img
                      src={teaParty.cohost.avatar}
                      className="h-16 w-16 rounded-md"
                      alt={teaParty.cohost.name}
                    />
                  )) || (
                    // 画像がない場合は同じ大きさの枠を表示して、中央に？マークを表示
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                      <div className="text-2xl text-gray-400">?</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
