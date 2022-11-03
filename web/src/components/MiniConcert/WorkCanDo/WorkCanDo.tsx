import { useState } from 'react'

import CheckBoxField from 'src/components/CheckBoxField/CheckBoxField'

const WorkWantToDo = () => {
  const options = [
    {
      label: 'マネジメント(事前の調整)',
      value: 'Management',
      description:
        'ミニコンサートの責任者。Discordでの呼びかけ、ワールド選定、スタッフの選任。開催する上で必要だが演る人がいないこと。各回のミニコンサートの枠組みの中でなら基本的に何でもできる。',
    },
    {
      label: '司会',
      value: 'MC',
      description:
        '現場指揮。お客さんへの注意事項説明、演奏者の誘導を行い、コンサートを進行する。（司会台本あり）',
    },
    {
      label: '来場者案内',
      value: 'Guide',
      description:
        'ワールドに来られたお客さんの案内。軽量アバター、注意事項の説明。',
    },
    {
      label: '写真撮影',
      value: 'Photography',
      description: 'コンサートの様子を写真におさめて記録する。',
    },
  ]
  const [selectedIdList, setSelectedIdList] = useState<string[]>([])
  return (
    <>
      <p className="mb-5 border-spacing-2 border-b-2 pb-2 text-xl font-medium">
        スタッフ設定
      </p>
      <div>
        <legend className="mb-2 text-lg font-medium">やってもいいよ！</legend>
        <CheckBoxField
          options={options}
          setSelectedIdList={setSelectedIdList}
          initialSelectedIdList={selectedIdList}
        />
      </div>
      <div className="mt-5">
        <legend className="mb-2 text-lg font-medium">
          やってみたいけど自信がない、教えてもらいながらならやってみたい！
        </legend>
        <CheckBoxField
          options={options}
          setSelectedIdList={setSelectedIdList}
          initialSelectedIdList={selectedIdList}
        />
      </div>
    </>
  )
}

export default WorkWantToDo
