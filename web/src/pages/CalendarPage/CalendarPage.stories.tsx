import type { ComponentMeta } from '@storybook/react'

import CalendarPage from './CalendarPage'

export const generated = () => {
  return <CalendarPage />
}

export default {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
} as ComponentMeta<typeof CalendarPage>
