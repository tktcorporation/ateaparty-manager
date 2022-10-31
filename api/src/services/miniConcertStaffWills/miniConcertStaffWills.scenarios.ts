import type { Prisma, MiniConcertStaffWill } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MiniConcertStaffWillCreateArgs>({
  miniConcertStaffWill: {
    one: {
      data: {
        StaffWantToDo: 'String',
        updatedAt: '2022-10-31T21:35:46Z',
        member: {
          create: { sub: 'String3032379', updatedAt: '2022-10-31T21:35:46Z' },
        },
      },
    },
    two: {
      data: {
        StaffWantToDo: 'String',
        updatedAt: '2022-10-31T21:35:46Z',
        member: {
          create: { sub: 'String684036', updatedAt: '2022-10-31T21:35:46Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  MiniConcertStaffWill,
  'miniConcertStaffWill'
>
