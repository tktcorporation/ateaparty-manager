import type { Prisma, TeaPartyStaff } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeaPartyStaffCreateArgs>({
  teaPartyStaff: {
    one: {
      data: {
        updatedAt: '2022-11-14T17:23:05.506Z',
        teaParty: {
          create: {
            scheduledAt: '2022-11-14T17:23:05.506Z',
            updatedAt: '2022-11-14T17:23:05.506Z',
          },
        },
        mcStaff: {
          create: {
            sub: 'String6132215',
            updatedAt: '2022-11-14T17:23:05.506Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-11-14T17:23:05.506Z',
        teaParty: {
          create: {
            scheduledAt: '2022-11-14T17:23:05.506Z',
            updatedAt: '2022-11-14T17:23:05.506Z',
          },
        },
        mcStaff: {
          create: {
            sub: 'String9934173',
            updatedAt: '2022-11-14T17:23:05.506Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TeaPartyStaff, 'teaPartyStaff'>
