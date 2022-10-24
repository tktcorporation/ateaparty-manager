import { render } from '@redwoodjs/testing/web'

import MissingAuthPage from './MissingAuthPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MissingAuthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MissingAuthPage />)
    }).not.toThrow()
  })
})
