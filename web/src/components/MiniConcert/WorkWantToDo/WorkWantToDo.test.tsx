import { render } from '@redwoodjs/testing/web'

import WorkWantToDo from './WorkWantToDo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WorkWantToDo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkWantToDo />)
    }).not.toThrow()
  })
})
