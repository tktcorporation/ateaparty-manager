import type { TeaPartyStaff } from '@prisma/client'

import { db } from 'src/lib/db'

import { teaParty } from './../teaParties/teaParties'
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
    const teaParty = await db.teaParty.create({
      data: {
        scheduledAt: '2021-09-01T00:00:00Z',
      },
    })
    const result = await createTeaPartyStaff({
      input: {
        teaPartyId: teaParty.id,
        mcStaffId: scenario.teaPartyStaff.two.mcStaffId,
      },
    })

    expect(result.teaPartyId).toEqual(teaParty.id)
    expect(result.mcStaffId).toEqual(scenario.teaPartyStaff.two.mcStaffId)
  })

  scenario('updates a teaPartyStaff', async (scenario: StandardScenario) => {
    const original = (await teaPartyStaff({
      id: scenario.teaPartyStaff.one.id,
    })) as TeaPartyStaff
    const result = await updateTeaPartyStaff({
      id: original.id,
      input: {
        teaPartyId: original.teaPartyId,
        mcStaffId: original.mcStaffId,
        mcSubStaffId: original.mcSubStaffId,
      },
    })

    expect(result.id).toEqual(original.id)
    expect(result.teaPartyId).toEqual(original.teaPartyId)
    expect(result.mcStaffId).toEqual(original.mcStaffId)
    expect(result.mcSubStaffId).toEqual(original.mcSubStaffId)
  })

  scenario('deletes a teaPartyStaff', async (scenario: StandardScenario) => {
    const original = (await deleteTeaPartyStaff({
      id: scenario.teaPartyStaff.one.id,
    })) as TeaPartyStaff
    const result = await teaPartyStaff({ id: original.id })

    expect(result).toEqual(null)
  })
})
