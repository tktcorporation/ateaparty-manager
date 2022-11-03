// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MiniConcertStaffRegistrationForm> = (args) => {
//   return <MiniConcertStaffRegistrationForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WorkWantToDo from './WorkCanDo'

export const generated = () => {
  return <WorkWantToDo />
}

export default {
  title: 'Components/MiniConcert/WorkWantToDo',
  component: WorkWantToDo,
} as ComponentMeta<typeof WorkWantToDo>
