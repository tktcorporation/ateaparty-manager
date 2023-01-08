// import type { ComponentMeta } from '@storybook/react'

import MissingAuthPage from './MissingAuthPage'

export const generated = () => {
  mockCurrentUser({
    roles: ['string'],
    sub: 'deadbeafdeadbeafdeadbeafdeadbeaf',
    name: 'exampleUser',
    pictureUrl: 'https://example.com/exampleUser.png',
  })
  return <MissingAuthPage />
}

export default {
  title: 'Pages/MissingAuthPage',
}
