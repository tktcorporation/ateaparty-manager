import type { MiniConcertStaffWill } from '@prisma/client'

import {
  miniConcertStaffWills,
  miniConcertStaffWill,
  createMiniConcertStaffWill,
  updateMiniConcertStaffWill,
  deleteMiniConcertStaffWill,
} from './miniConcertStaffWills'
import type { StandardScenario } from './miniConcertStaffWills.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('miniConcertStaffWills', () => {
  scenario(
    'returns all miniConcertStaffWills',
    async (scenario: StandardScenario) => {
      const result = await miniConcertStaffWills()

      expect(result.length).toEqual(
        Object.keys(scenario.miniConcertStaffWill).length
      )
    }
  )

  scenario(
    'returns a single miniConcertStaffWill',
    async (scenario: StandardScenario) => {
      const result = await miniConcertStaffWill({
        id: scenario.miniConcertStaffWill.one.id,
      })

      expect(result).toEqual(scenario.miniConcertStaffWill.one)
    }
  )

  scenario(
    'creates a miniConcertStaffWill',
    async (scenario: StandardScenario) => {
      const result = await createMiniConcertStaffWill({
        input: {
          StaffWantToDo: 'String',
          updatedAt: '2022-10-31T21:35:46Z',
          memberId: scenario.miniConcertStaffWill.two.memberId,
        },
      })

      expect(result.StaffWantToDo).toEqual('String')
      expect(result.updatedAt).toEqual('2022-10-31T21:35:46Z')
      expect(result.memberId).toEqual(
        scenario.miniConcertStaffWill.two.memberId
      )
    }
  )

  scenario(
    'updates a miniConcertStaffWill',
    async (scenario: StandardScenario) => {
      const original = (await miniConcertStaffWill({
        id: scenario.miniConcertStaffWill.one.id,
      })) as MiniConcertStaffWill
      const result = await updateMiniConcertStaffWill({
        id: original.id,
        input: { StaffWantToDo: 'String2' },
      })

      expect(result.StaffWantToDo).toEqual('String2')
    }
  )

  scenario(
    'deletes a miniConcertStaffWill',
    async (scenario: StandardScenario) => {
      const original = (await deleteMiniConcertStaffWill({
        id: scenario.miniConcertStaffWill.one.id,
      })) as MiniConcertStaffWill
      const result = await miniConcertStaffWill({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
