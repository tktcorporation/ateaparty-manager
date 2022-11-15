import { render } from '@redwoodjs/testing/web'

import TeaPartyPage from './TeaPartyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeaPartyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeaPartyPage />)
    }).not.toThrow()
  })
})
