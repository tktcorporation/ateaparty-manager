import type { ComponentMeta } from '@storybook/react'

import TeaPartyPage from './TeaPartyPage'

export const generated = () => {
  return <TeaPartyPage />
}

export default {
  title: 'Pages/TeaPartyPage',
  component: TeaPartyPage,
} as ComponentMeta<typeof TeaPartyPage>
