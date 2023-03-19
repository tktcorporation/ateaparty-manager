import { render } from '@redwoodjs/testing/web'

import EventTimeLine from './EventTimeLine'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventTimeLine', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventTimeLine />)
    }).not.toThrow()
  })
})
