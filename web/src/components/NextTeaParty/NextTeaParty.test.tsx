import { render } from '@redwoodjs/testing/web'

import NextTeaParty from './NextTeaParty'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NextTeaParty', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <NextTeaParty id={1} scheduledAt={new Date()} mcStaffName="test" />
      )
    }).not.toThrow()
  })
})
