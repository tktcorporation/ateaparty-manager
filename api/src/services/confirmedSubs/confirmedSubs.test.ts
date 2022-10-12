import type { ConfirmedSub } from '@prisma/client'

import {
  confirmedSubs,
  confirmedSub,
  createConfirmedSub,
  updateConfirmedSub,
  deleteConfirmedSub,
} from './confirmedSubs'
import type { StandardScenario } from './confirmedSubs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('confirmedSubs', () => {
  scenario('returns all confirmedSubs', async (scenario: StandardScenario) => {
    const result = await confirmedSubs()

    expect(result.length).toEqual(Object.keys(scenario.confirmedSub).length)
  })

  scenario(
    'returns a single confirmedSub',
    async (scenario: StandardScenario) => {
      const result = await confirmedSub({ id: scenario.confirmedSub.one.id })

      expect(result).toEqual(scenario.confirmedSub.one)
    }
  )

  scenario('creates a confirmedSub', async () => {
    const result = await createConfirmedSub({
      input: { sub: 'String821595' },
    })

    expect(result.sub).toEqual('String821595')
  })

  scenario('updates a confirmedSub', async (scenario: StandardScenario) => {
    const original = (await confirmedSub({
      id: scenario.confirmedSub.one.id,
    })) as ConfirmedSub
    const result = await updateConfirmedSub({
      id: original.id,
      input: { sub: 'String86514902' },
    })

    expect(result.sub).toEqual('String86514902')
  })

  scenario('deletes a confirmedSub', async (scenario: StandardScenario) => {
    const original = (await deleteConfirmedSub({
      id: scenario.confirmedSub.one.id,
    })) as ConfirmedSub
    const result = await confirmedSub({ id: original.id })

    expect(result).toEqual(null)
  })
})
