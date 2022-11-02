import type { ComponentMeta } from '@storybook/react'

import LogoutPage from './LogoutPage'

export const generated = () => {
  return <LogoutPage />
}

export default {
  title: 'Pages/LogoutPage',
  component: LogoutPage,
} as ComponentMeta<typeof LogoutPage>
