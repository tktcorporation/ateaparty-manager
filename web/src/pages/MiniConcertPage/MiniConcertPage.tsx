import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import MiniConcertStaffWorkManagementCell from 'src/components/MiniConcertStaffWorkManagementCell'

const MiniConcertPage = () => {
  return (
    <>
      <MetaTags title="MiniConcert" description="MiniConcert page" />

      <Toaster />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">ミニコンサート</h1>
        <div className="mt-5 flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
          <p className="text-center text-2xl">次回開催日: XXXX.X.X XX:XX</p>
        </div>
        {/* 2 columns on desktop, 1 column on mobile */}
        <div className="mt-3">
          <p className="mb-5 border-spacing-2 border-b-2 pb-2 text-xl font-medium">
            スタッフ設定
          </p>
          <div className="mt-5">
            <legend className="text-lg font-medium">
              マネジメント(事前の調整)
            </legend>
            <p className="text-sm text-gray-500">
              ミニコンサートの責任者。Discordでの呼びかけ、ワールド選定、スタッフの選任。開催する上で必要だが演る人がいないこと。各回のミニコンサートの枠組みの中でなら基本的に何でもできる。
            </p>
            <div className="mt-2">
              <MiniConcertStaffWorkManagementCell />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniConcertPage
