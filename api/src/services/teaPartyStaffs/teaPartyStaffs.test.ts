import type { TeaPartyStaff } from '@prisma/client'

import {
  teaPartyStaffs,
  teaPartyStaff,
  createTeaPartyStaff,
  updateTeaPartyStaff,
  deleteTeaPartyStaff,
} from './teaPartyStaffs'
import type { StandardScenario } from './teaPartyStaffs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teaPartyStaffs', () => {
  scenario('returns all teaPartyStaffs', async (scenario: StandardScenario) => {
    const result = await teaPartyStaffs()

    expect(result.length).toEqual(Object.keys(scenario.teaPartyStaff).length)
  })

  scenario(
    'returns a single teaPartyStaff',
    async (scenario: StandardScenario) => {
      const result = await teaPartyStaff({ id: scenario.teaPartyStaff.one.id })

      expect(result).toEqual(scenario.teaPartyStaff.one)
    }
  )

  scenario('creates a teaPartyStaff', async (scenario: StandardScenario) => {
    const result = await createTeaPartyStaff({
      input: {
        teaPartyId: scenario.teaPartyStaff.two.teaPartyId,
        mcStaffId: scenario.teaPartyStaff.two.mcStaffId,
        updatedAt: '2022-11-14T17:23:05.462Z',
      },
    })

    expect(result.teaPartyId).toEqual(scenario.teaPartyStaff.two.teaPartyId)
    expect(result.mcStaffId).toEqual(scenario.teaPartyStaff.two.mcStaffId)
    expect(result.updatedAt).toEqual(new Date('2022-11-14T17:23:05.462Z'))
  })

  scenario('updates a teaPartyStaff', async (scenario: StandardScenario) => {
    const original = (await teaPartyStaff({
      id: scenario.teaPartyStaff.one.id,
    })) as TeaPartyStaff
    const result = await updateTeaPartyStaff({
      id: original.id,
      input: { updatedAt: '2022-11-15T17:23:05.462Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2022-11-15T17:23:05.462Z'))
  })

  scenario('deletes a teaPartyStaff', async (scenario: StandardScenario) => {
    const original = (await deleteTeaPartyStaff({
      id: scenario.teaPartyStaff.one.id,
    })) as TeaPartyStaff
    const result = await teaPartyStaff({ id: original.id })

    expect(result).toEqual(null)
  })
})
