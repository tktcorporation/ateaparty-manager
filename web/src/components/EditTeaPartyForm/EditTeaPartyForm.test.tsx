import { render } from '@redwoodjs/testing/web'

import EditTeaPartyForm from './EditTeaPartyForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditTeaPartyForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTeaPartyForm />)
    }).not.toThrow()
  })
})
