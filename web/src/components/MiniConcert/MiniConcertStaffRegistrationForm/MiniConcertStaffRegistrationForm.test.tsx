import { render } from '@redwoodjs/testing/web'

import MiniConcertStaffRegistrationForm from './MiniConcertStaffRegistrationForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MiniConcertStaffRegistrationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MiniConcertStaffRegistrationForm />)
    }).not.toThrow()
  })
})
