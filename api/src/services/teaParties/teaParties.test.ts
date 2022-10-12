import type { TeaParty } from '@prisma/client'

import {
  teaParties,
  teaParty,
  createTeaParty,
  updateTeaParty,
  deleteTeaParty,
} from './teaParties'
import type { StandardScenario } from './teaParties.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teaParties', () => {
  scenario('returns all teaParties', async (scenario: StandardScenario) => {
    const result = await teaParties()

    expect(result.length).toEqual(Object.keys(scenario.teaParty).length)
  })

  scenario('returns a single teaParty', async (scenario: StandardScenario) => {
    const result = await teaParty({ id: scenario.teaParty.one.id })

    expect(result).toEqual(scenario.teaParty.one)
  })

  scenario('creates a teaParty', async () => {
    const result = await createTeaParty({
      input: { scheduledAt: '2022-10-12T13:50:34Z' },
    })

    expect(result.scheduledAt).toEqual('2022-10-12T13:50:34Z')
  })

  scenario('updates a teaParty', async (scenario: StandardScenario) => {
    const original = (await teaParty({
      id: scenario.teaParty.one.id,
    })) as TeaParty
    const result = await updateTeaParty({
      id: original.id,
      input: { scheduledAt: '2022-10-13T13:50:34Z' },
    })

    expect(result.scheduledAt).toEqual('2022-10-13T13:50:34Z')
  })

  scenario('deletes a teaParty', async (scenario: StandardScenario) => {
    const original = (await deleteTeaParty({
      id: scenario.teaParty.one.id,
    })) as TeaParty
    const result = await teaParty({ id: original.id })

    expect(result).toEqual(null)
  })
})
