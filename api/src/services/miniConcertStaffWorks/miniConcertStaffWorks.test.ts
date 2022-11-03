import type { MiniConcertStaffWork } from '@prisma/client'

import {
  miniConcertStaffWorks,
  miniConcertStaffWork,
  createMiniConcertStaffWork,
  updateMiniConcertStaffWork,
  deleteMiniConcertStaffWork,
} from './miniConcertStaffWorks'
import type { StandardScenario } from './miniConcertStaffWorks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('miniConcertStaffWorks', () => {
  scenario(
    'returns all miniConcertStaffWorks',
    async (scenario: StandardScenario) => {
      const result = await miniConcertStaffWorks()

      expect(result.length).toEqual(
        Object.keys(scenario.miniConcertStaffWork).length
      )
    }
  )

  scenario(
    'returns a single miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      const result = await miniConcertStaffWork({
        id: scenario.miniConcertStaffWork.one.id,
      })

      expect(result).toEqual(scenario.miniConcertStaffWork.one)
    }
  )

  scenario(
    'creates a miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      const result = await createMiniConcertStaffWork({
        input: {
          memberId: scenario.miniConcertStaffWork.two.memberId,
          updatedAt: '2022-11-03T16:59:21.135Z',
        },
      })

      expect(result.memberId).toEqual(
        scenario.miniConcertStaffWork.two.memberId
      )
      expect(result.updatedAt).toEqual(new Date('2022-11-03T16:59:21.135Z'))
    }
  )

  scenario(
    'updates a miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      const original = (await miniConcertStaffWork({
        id: scenario.miniConcertStaffWork.one.id,
      })) as MiniConcertStaffWork
      const result = await updateMiniConcertStaffWork({
        id: original.id,
        input: { updatedAt: '2022-11-04T16:59:21.135Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2022-11-04T16:59:21.135Z'))
    }
  )

  scenario(
    'deletes a miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      const original = (await deleteMiniConcertStaffWork({
        id: scenario.miniConcertStaffWork.one.id,
      })) as MiniConcertStaffWork
      const result = await miniConcertStaffWork({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
