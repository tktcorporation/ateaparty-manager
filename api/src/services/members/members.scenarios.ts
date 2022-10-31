import type { Prisma, Member } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: { data: { sub: 'String9873488', updatedAt: '2022-10-31T21:35:26Z' } },
    two: { data: { sub: 'String7102107', updatedAt: '2022-10-31T21:35:26Z' } },
  },
})

export type StandardScenario = ScenarioData<Member, 'member'>
