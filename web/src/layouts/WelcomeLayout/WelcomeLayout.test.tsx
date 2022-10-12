import { render } from '@redwoodjs/testing/web'

import WelcomeLayout from './WelcomeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WelcomeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WelcomeLayout />)
    }).not.toThrow()
  })
})
