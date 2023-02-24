import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './public'
import { StandardScenario } from './public.scenarios'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-functions

describe('public function', () => {
  it('Should respond with 200', async () => {
    const httpEvent = mockHttpEvent({})

    const response = await handler(httpEvent, null)
    const { data } = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(data).toStrictEqual([])
  })

  scenario('returns all teaParties', async (scenario: StandardScenario) => {
    const httpEvent = mockHttpEvent({})
    const response = await handler(httpEvent, null)
    const { data } = JSON.parse(response.body)

    expect(data.length).toEqual(Object.keys(scenario.teaParty).length)
  })
})
