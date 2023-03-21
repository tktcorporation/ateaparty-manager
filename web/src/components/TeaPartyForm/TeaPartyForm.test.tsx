import { render } from '@redwoodjs/testing/web'

import TeaPartyForm from './TeaPartyForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeaPartyForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeaPartyForm />)
    }).not.toThrow()
  })
})
