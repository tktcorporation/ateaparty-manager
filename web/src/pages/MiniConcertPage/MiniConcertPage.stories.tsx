import type { ComponentMeta } from '@storybook/react'

import MiniConcertPage from './MiniConcertPage'

export const generated = () => {
  return <MiniConcertPage />
}

export default {
  title: 'Pages/MiniConcertPage',
  component: MiniConcertPage,
} as ComponentMeta<typeof MiniConcertPage>
