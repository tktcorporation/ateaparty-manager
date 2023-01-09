// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NextTeaParty> = (args) => {
//   return <NextTeaParty {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NextTeaParty from './NextTeaParty'

export const generated = () => {
  return <NextTeaParty />
}

export default {
  title: 'Components/NextTeaParty',
  component: NextTeaParty,
} as ComponentMeta<typeof NextTeaParty>
