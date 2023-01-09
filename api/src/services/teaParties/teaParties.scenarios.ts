import type { Prisma, TeaParty } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeaPartyCreateArgs>({
  teaParty: {
    one: {
      data: {
        scheduledAt: '2022-10-12T13:50:34Z',
        teaPartyStaff: {
          create: {
            mcStaff: {
              create: {
                name: 'String',
                pictureUrl: 'String',
                sub: 'oauth|discord|123412341234123411',
                updatedAt: '2022-10-12T13:50:34Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        scheduledAt: '2022-10-12T13:50:34Z',
        teaPartyStaff: {
          create: {
            mcStaff: {
              create: {
                name: 'String',
                pictureUrl: 'String',
                sub: 'oauth|discord|123412341234123412',
                updatedAt: '2022-10-12T13:50:34Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TeaParty, 'teaParty'>
