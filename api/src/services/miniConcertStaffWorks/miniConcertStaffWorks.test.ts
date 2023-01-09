import type { MiniConcertStaffWork } from '@prisma/client'

import {
  miniConcertStaffWork,
  updateMiniConcertStaffWork,
} from './miniConcertStaffWorks'
import type { StandardScenario } from './miniConcertStaffWorks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('miniConcertStaffWorks', () => {
  scenario(
    'returns a single miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      mockCurrentUser({
        id: scenario.miniConcertStaffWork.one.id,
        sub: 'oauth|discord|123412341234123412',
        pictureUrl: 'String',
        name: 'String',
        member: {
          id: scenario.miniConcertStaffWork.one.memberId,
        },
        updatedAt: new Date('2022-11-03T16:59:21.198Z'),
        createdAt: new Date('2022-11-03T16:59:21.198Z'),
      })
      const result = await miniConcertStaffWork()

      expect(result).toEqual(scenario.miniConcertStaffWork.one)
    }
  )

  scenario(
    'updates a miniConcertStaffWork',
    async (scenario: StandardScenario) => {
      mockCurrentUser({
        id: 1,
        name: 'String',
        sub: 'oauth|discord|123412341234123412',
        pictureUrl: 'String',
        member: {
          id: scenario.miniConcertStaffWork.one.memberId,
        },
        updatedAt: new Date('2022-11-03T16:59:21.198Z'),
        createdAt: new Date('2022-11-03T16:59:21.198Z'),
      })
      ;(await miniConcertStaffWork()) as MiniConcertStaffWork
      const result = await updateMiniConcertStaffWork({
        input: { mc: scenario.miniConcertStaffWork.one.mc },
      })

      expect(result.mc).toEqual(scenario.miniConcertStaffWork.one.mc)
    }
  )
})
