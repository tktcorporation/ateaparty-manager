import type { Prisma, MiniConcertStaffWork } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MiniConcertStaffWorkCreateArgs>({
  miniConcertStaffWork: {
    one: {
      data: {
        updatedAt: '2022-11-03T16:59:21.198Z',
        member: {
          create: {
            sub: 'String6995051',
            updatedAt: '2022-11-03T16:59:21.198Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-11-03T16:59:21.198Z',
        member: {
          create: {
            sub: 'String8661145',
            updatedAt: '2022-11-03T16:59:21.198Z',
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
