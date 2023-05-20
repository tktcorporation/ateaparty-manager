import type { Prisma, Member } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: {
        id: undefined,
        sub: 'String9873488',
        name: 'Taro',
        avatar: 'https://example.com/image.jpg',
        updatedAt: '2022-10-31T21:35:26Z',
      },
    },
    two: {
      data: {
        sub: 'String7102107',
        name: 'Jiro',
        avatar: 'https://example.com/image2.jpg',
        updatedAt: '2022-11-01T21:35:26Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Member, 'member'>
