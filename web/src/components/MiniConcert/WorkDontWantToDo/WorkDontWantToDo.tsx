import { useState } from 'react'

import CheckBoxField from 'src/components/CheckBoxField/CheckBoxField'

const WorkDontWantToDo = () => {
  const options = [
    { label: '司会', value: 'MC' },
    { label: '来場者の誘導', value: 'Guide' },
    { label: 'マネジメント(事前の調整)', value: 'Management' },
    { label: '写真撮影', value: 'Photography' },
    { label: '動画撮影', value: 'Video' },
  ]
  const [selectedIdList, setSelectedIdList] = useState<string[]>([])
  return (
    <>
      <legend className="text-sm font-medium text-gray-900 dark:text-gray-300">
        やりたくないことがあったら教えてください
      </legend>
      <CheckBoxField
        options={options}
        setSelectedIdList={setSelectedIdList}
        initialSelectedIdList={selectedIdList}
      />
    </>
  )
}

export default WorkDontWantToDo
