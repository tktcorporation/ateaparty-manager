// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TeaPartyForm> = (args) => {
//   return <TeaPartyForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TeaPartyForm from './TeaPartyForm'

export const generated = () => {
  return <TeaPartyForm />
}

export default {
  title: 'Components/TeaPartyForm',
  component: TeaPartyForm,
} as ComponentMeta<typeof TeaPartyForm>
