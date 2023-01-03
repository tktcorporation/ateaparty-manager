import { render } from '@redwoodjs/testing/web'

import TeaPartiesPage from './TeaPartiesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeaPartiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeaPartiesPage />)
    }).not.toThrow()
  })
})
