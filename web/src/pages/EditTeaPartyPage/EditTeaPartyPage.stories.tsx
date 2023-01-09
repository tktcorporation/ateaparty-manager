import type { ComponentMeta } from '@storybook/react'

import EditTeaPartyPage from './EditTeaPartyPage'

export const generated = () => {
  return <EditTeaPartyPage id={1} />
}

export default {
  title: 'Pages/EditTeaPartyPage',
  component: EditTeaPartyPage,
} as ComponentMeta<typeof EditTeaPartyPage>
