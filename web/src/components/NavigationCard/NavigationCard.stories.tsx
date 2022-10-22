// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavigationCard> = (args) => {
//   return <NavigationCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NavigationCard from './NavigationCard'

export const generated = () => {
  return (
    <NavigationCard
      title="SampleTitle"
      route={undefined}
      description="SampleDescription"
    />
  )
}

export default {
  title: 'Components/NavigationCard',
  component: NavigationCard,
} as ComponentMeta<typeof NavigationCard>
