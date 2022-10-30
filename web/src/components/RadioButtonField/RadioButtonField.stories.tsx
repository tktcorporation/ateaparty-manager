// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RadioButtonField> = (args) => {
//   return <RadioButtonField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { useState } from 'react'

import type { ComponentMeta } from '@storybook/react'

import RadioButtonField from './RadioButtonField'

export const Generated = () => {
  const options = [
    { value: 'will', label: 'スタッフ参加したい' },
    { value: 'smallWill', label: 'そこそこ参加したい' },
    {
      value: 'help',
      label: '助っ人参加 (足りなくて困ったときにお願いします)',
    },
  ]
  const [staffWill, setStaffWill] = useState('Play')
  return (
    <>
      <legend className="text-sm font-medium text-gray-900 dark:text-gray-300">
        スタッフ参加の希望度合いを教えてください
      </legend>
      <RadioButtonField
        options={options}
        value={'will'}
        setValue={setStaffWill}
      />
      {/* preview */}
      <p>Preview:</p>
      <p>{staffWill}</p>
    </>
  )
}

export default {
  title: 'Components/RadioButtonField',
  component: RadioButtonField,
} as ComponentMeta<typeof RadioButtonField>
