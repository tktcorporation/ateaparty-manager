// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EventTimeLine> = (args) => {
//   return <EventTimeLine {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EventTimeLine from './EventTimeLine'

export const generated = () => {
  return <EventTimeLine />
}

export default {
  title: 'Components/EventTimeLine',
  component: EventTimeLine,
} as ComponentMeta<typeof EventTimeLine>
