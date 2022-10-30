// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CheckBoxField> = (args) => {
//   return <CheckBoxField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { useState } from 'react'

import type { ComponentMeta } from '@storybook/react'

import CheckBoxField from './CheckBoxField'

export const Generated = () => {
  const options = [
    { label: '司会', value: 'MC' },
    { label: '来場者の誘導', value: 'Guide' },
    { label: 'マネジメント(事前の調整)', value: 'Management' },
    { label: '写真撮影', value: 'Photography' },
    { label: '動画撮影', value: 'Video' },
  ]
  const [selectedIdList, setSelectedIdList] = useState<string[]>(['MC'])
  return (
    <>
      <legend className="text-sm font-medium text-gray-900 dark:text-gray-300">
        やりたい、やってみたいタスク
      </legend>
      <CheckBoxField
        options={options}
        setSelectedIdList={setSelectedIdList}
        initialSelectedIdList={selectedIdList}
      />
      {/* preview */}
      <p>Preview:</p>
      <p>{JSON.stringify(selectedIdList)}</p>
    </>
  )
}

export default {
  title: 'Components/CheckBoxField',
  component: CheckBoxField,
} as ComponentMeta<typeof CheckBoxField>
