import { render } from '@redwoodjs/testing/web'

import TeaPartiesList from './TeaPartiesList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeaPartiesList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeaPartiesList />)
    }).not.toThrow()
  })
})
