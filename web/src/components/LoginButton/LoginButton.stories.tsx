// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LoginButton> = (args) => {
//   return <LoginButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LoginButton from './LoginButton'

export const Button = () => {
  const [loading, setLoading] = React.useState(false)
  const logIn = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }
  return <LoginButton loading={loading} logIn={logIn} />
}

export const Loading = () => {
  return <LoginButton loading={true} logIn={() => new Promise(() => {})} />
}

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>
