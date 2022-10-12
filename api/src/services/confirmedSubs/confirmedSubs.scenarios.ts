import type { Prisma, ConfirmedSub } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConfirmedSubCreateArgs>({
  confirmedSub: {
    one: { data: { sub: 'String245058' } },
    two: { data: { sub: 'String2041907' } },
  },
})

export type StandardScenario = ScenarioData<ConfirmedSub, 'confirmedSub'>
