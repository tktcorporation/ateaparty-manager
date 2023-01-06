import { MetaTags } from '@redwoodjs/web'

import MiniConcertStaffWorkManagementCell from 'src/components/MiniConcert/MiniConcertStaffWorkManagementCell'
import MiniConcertStaffWorkMcCell from 'src/components/MiniConcert/MiniConcertStaffWorkMcCell'
import MiniConcertStaffWorkPhotographyCell from 'src/components/MiniConcert/MiniConcertStaffWorkPhotographyCell'
import MiniConcertStaffWorkVisitorGuideCell from 'src/components/MiniConcert/MiniConcertStaffWorkVisitorGuideCell'

const MiniConcertPage = () => {
  return (
    <>
      <MetaTags title="MiniConcert" description="MiniConcert page" />

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
            <div className="mt-5">
              <legend className="text-lg font-medium">司会</legend>
              <p className="text-sm text-gray-500">
                現場指揮。お客さんへの注意事項説明、演奏者の誘導を行い、コンサートを進行する。（司会台本あり）
              </p>
              <div className="mt-2">
                <MiniConcertStaffWorkMcCell />
              </div>
            </div>
            <div className="mt-5">
              <legend className="text-lg font-medium">来場者案内</legend>
              <p className="text-sm text-gray-500">
                ワールドに来られたお客さんの案内。軽量アバター、注意事項の説明。
              </p>
              <div className="mt-2">
                <MiniConcertStaffWorkVisitorGuideCell />
              </div>
            </div>
            <div className="mt-5">
              <legend className="text-lg font-medium">写真撮影</legend>
              <p className="text-sm text-gray-500">
                コンサートの様子を写真におさめて記録する。
              </p>
              <div className="mt-2">
                <MiniConcertStaffWorkPhotographyCell />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniConcertPage
