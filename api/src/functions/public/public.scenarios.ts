import { addDays } from 'date-fns'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario({
  // Define the "fixture" to write into your test database here
  // See guide: https://redwoodjs.com/docs/testing#scenarios
  teaParty: {
    one: {
      data: {
        date: addDays(new Date(), 1),
        host: {
          create: {
            sub: 'oauth2|discord|000000000000000001',
            name: 'String',
            avatar: 'String',
          },
        },
      },
    },
    two: {
      data: {
        date: addDays(new Date(), 8),
        host: {
          create: {
            name: 'String',
            sub: 'oauth2|discord|000000000000000002',
            avatar: 'String',
          },
        },
        cohost: {
          create: {
            name: 'String',
            sub: 'oauth2|discord|000000000000000003',
            avatar: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<unknown>
