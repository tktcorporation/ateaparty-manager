import type { ComponentMeta } from '@storybook/react'

import MissingAuthPage from './MissingAuthPage'

export const generated = () => {
  return <MissingAuthPage />
}

export default {
  title: 'Pages/MissingAuthPage',
  component: MissingAuthPage,
} as ComponentMeta<typeof MissingAuthPage>
