import type { Prisma, TeaParty } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeaPartyCreateArgs>({
  teaParty: {
    one: {
      data: {
        date: '2023-04-23T18:11:39.695Z',
        updatedAt: '2023-04-16T18:11:39.695Z',
        host: {
          create: {
            sub: 'String7420920',
            name: 'String',
            avatar: 'String',
            updatedAt: '2023-04-16T18:11:39.695Z',
          },
        },
        cohost: {
          create: {
            sub: 'String8223244',
            name: 'String',
            avatar: 'String',
            updatedAt: '2023-04-16T18:11:39.695Z',
          },
        },
      },
    },
    two: {
      data: {
        date: '2023-04-16T18:11:39.695Z',
        updatedAt: '2023-04-16T18:11:39.695Z',
        host: {
          create: {
            sub: 'String8723571',
            name: 'String',
            avatar: 'String',
            updatedAt: '2023-04-16T18:11:39.695Z',
          },
        },
        cohost: {
          create: {
            sub: 'String5003521',
            name: 'String',
            avatar: 'String',
            updatedAt: '2023-04-16T18:11:39.695Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TeaParty, 'teaParty'>
