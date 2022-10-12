import type { ComponentMeta, ComponentStory } from '@storybook/react'

import WelcomeLayout from './WelcomeLayout'

export const generated: ComponentStory<typeof WelcomeLayout> = (args) => {
  return <WelcomeLayout {...args} />
}

export default {
  title: 'Layouts/WelcomeLayout',
  component: WelcomeLayout,
} as ComponentMeta<typeof WelcomeLayout>
