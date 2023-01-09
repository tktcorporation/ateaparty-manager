import type { Prisma, MiniConcertStaffWork } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MiniConcertStaffWorkCreateArgs>({
  miniConcertStaffWork: {
    one: {
      data: {
        updatedAt: '2022-11-03T16:59:21.198Z',
        member: {
          create: {
            sub: 'oauth|discord|123412341234123412',
            name: 'String',
            pictureUrl: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-11-03T16:59:21.198Z',
        member: {
          create: {
            sub: 'oauth|discord|123412341234123413',
            name: 'String',
            pictureUrl: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  MiniConcertStaffWork,
  'miniConcertStaffWork'
>
