import { render } from '@redwoodjs/testing/web'

import RadioButtonField from './RadioButtonField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RadioButtonField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RadioButtonField />)
    }).not.toThrow()
  })
})
