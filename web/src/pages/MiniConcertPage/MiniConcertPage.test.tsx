import { render } from '@redwoodjs/testing/web'

import MiniConcertPage from './MiniConcertPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MiniConcertPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MiniConcertPage />)
    }).not.toThrow()
  })
})
