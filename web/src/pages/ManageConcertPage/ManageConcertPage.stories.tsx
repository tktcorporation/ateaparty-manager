import type { ComponentMeta } from '@storybook/react'

import ManageConcertPage from './ManageConcertPage'

export const generated = () => {
  return <ManageConcertPage />
}

export default {
  title: 'Pages/ManageConcertPage',
  component: ManageConcertPage,
} as ComponentMeta<typeof ManageConcertPage>
