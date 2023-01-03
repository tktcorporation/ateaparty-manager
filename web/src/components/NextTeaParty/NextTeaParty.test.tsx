import { render } from '@redwoodjs/testing/web'

import NextTeaParty from './NextTeaParty'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NextTeaParty', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NextTeaParty />)
    }).not.toThrow()
  })
})
