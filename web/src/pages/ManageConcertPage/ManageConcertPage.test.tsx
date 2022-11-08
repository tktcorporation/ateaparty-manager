import { render } from '@redwoodjs/testing/web'

import ManageConcertPage from './ManageConcertPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ManageConcertPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManageConcertPage />)
    }).not.toThrow()
  })
})
