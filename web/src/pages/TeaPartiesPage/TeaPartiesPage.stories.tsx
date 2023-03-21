import type { ComponentMeta } from '@storybook/react'

import TeaPartiesPage from './TeaPartiesPage'

export const generated = () => {
  return <TeaPartiesPage />
}

export default {
  title: 'Pages/TeaPartiesPage',
  component: TeaPartiesPage,
} as ComponentMeta<typeof TeaPartiesPage>
