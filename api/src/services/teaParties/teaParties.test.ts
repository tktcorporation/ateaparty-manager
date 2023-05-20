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
// and can fail without adjustments, e.g. Float.
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

  scenario('creates a teaParty', async (scenario: StandardScenario) => {
    const result = await createTeaParty({
      input: {
        date: '2023-04-16T18:11:39.624Z',
        hostId: scenario.teaParty.two.hostId,
        cohostId: scenario.teaParty.two.cohostId,
      },
    })

    expect(result.date).toEqual(new Date('2023-04-16T18:11:39.624Z'))
    expect(result.hostId).toEqual(scenario.teaParty.two.hostId)
    expect(result.cohostId).toEqual(scenario.teaParty.two.cohostId)
  })

  scenario('updates a teaParty', async (scenario: StandardScenario) => {
    const original = (await teaParty({
      id: scenario.teaParty.one.id,
    })) as TeaParty
    const result = await updateTeaParty({
      id: original.id,
      input: { date: '2023-04-17T18:11:39.624Z' },
    })

    expect(result.date).toEqual(new Date('2023-04-17T18:11:39.624Z'))
  })

  scenario('deletes a teaParty', async (scenario: StandardScenario) => {
    const original = (await deleteTeaParty({
      id: scenario.teaParty.one.id,
    })) as TeaParty
    const result = await teaParty({ id: original.id })

    expect(result).toEqual(null)
  })
})
