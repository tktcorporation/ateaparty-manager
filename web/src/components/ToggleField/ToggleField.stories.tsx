// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ToggleField> = (args) => {
//   return <ToggleField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ToggleField from './ToggleField'

export const Generated = () => {
  const [value, setValue] = React.useState(false)
  return (
    <>
      <ToggleField
        label="スタッフ参加を希望する"
        name="staff"
        checked={value}
        onChange={setValue}
      />
      <p>Preview:</p>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  )
}

export default {
  title: 'Components/ToggleField',
  component: ToggleField,
} as ComponentMeta<typeof ToggleField>
