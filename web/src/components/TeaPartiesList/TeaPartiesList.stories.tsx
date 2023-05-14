// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TeaPartiesList> = (args) => {
//   return <TeaPartiesList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TeaPartiesList from './TeaPartiesList'

export const generated = () => {
  return <TeaPartiesList />
}

export default {
  title: 'Components/TeaPartiesList',
  component: TeaPartiesList,
} as ComponentMeta<typeof TeaPartiesList>
