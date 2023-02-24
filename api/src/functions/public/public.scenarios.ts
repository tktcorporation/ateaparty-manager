import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario({
  // Define the "fixture" to write into your test database here
  // See guide: https://redwoodjs.com/docs/testing#scenarios
  teaParty: {
    one: {
      data: {
        scheduledAt: new Date(),
      },
    },
    two: {
      data: {
        scheduledAt: new Date(),
      },
    },
  },
})

export type StandardScenario = ScenarioData<unknown>
