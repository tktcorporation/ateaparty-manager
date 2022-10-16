// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserAuthTools> = (args) => {
//   return <UserAuthTools {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { useState } from 'react'

import type { ComponentMeta } from '@storybook/react'

import UserAuthTools from './UserAuthTools'

export const Button = () => {
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const logIn = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsAuthenticated(true)
    setLoading(false)
  }
  const logout = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsAuthenticated(false)
    setLoading(false)
  }
  return (
    <UserAuthTools
      loading={loading}
      isAuthenticated={isAuthenticated}
      logIn={logIn}
      logOut={logout}
    />
  )
}

export default {
  title: 'Components/UserAuthTools',
  component: UserAuthTools,
} as ComponentMeta<typeof UserAuthTools>
