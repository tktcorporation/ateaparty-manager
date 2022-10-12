import type { Prisma, TeaParty } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeaPartyCreateArgs>({
  teaParty: {
    one: { data: { scheduledAt: '2022-10-12T13:50:34Z' } },
    two: { data: { scheduledAt: '2022-10-12T13:50:34Z' } },
  },
})

export type StandardScenario = ScenarioData<TeaParty, 'teaParty'>
