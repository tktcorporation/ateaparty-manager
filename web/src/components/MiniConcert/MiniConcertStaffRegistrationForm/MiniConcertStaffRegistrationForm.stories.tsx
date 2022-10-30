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

import MiniConcertStaffRegistrationForm from './MiniConcertStaffRegistrationForm'

export const generated = () => {
  return <MiniConcertStaffRegistrationForm />
}

export default {
  title: 'Components/MiniConcert/MiniConcertStaffRegistrationForm',
  component: MiniConcertStaffRegistrationForm,
} as ComponentMeta<typeof MiniConcertStaffRegistrationForm>
