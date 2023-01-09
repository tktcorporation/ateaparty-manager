import type { Prisma, ConfirmedSub } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConfirmedSubCreateArgs>({
  confirmedSub: {
    one: { data: { sub: 'oauth|discord|123412341234123412' } },
    two: { data: { sub: 'oauth|discord|123412341234123413' } },
  },
})

export type StandardScenario = ScenarioData<ConfirmedSub, 'confirmedSub'>
