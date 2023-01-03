// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EditTeaPartyForm> = (args) => {
//   return <EditTeaPartyForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EditTeaPartyForm from './EditTeaPartyForm'

export const generated = () => {
  return <EditTeaPartyForm />
}

export default {
  title: 'Components/EditTeaPartyForm',
  component: EditTeaPartyForm,
} as ComponentMeta<typeof EditTeaPartyForm>
