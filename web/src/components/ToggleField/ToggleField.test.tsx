import { render } from '@redwoodjs/testing/web'

import ToggleField from './ToggleField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ToggleField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToggleField />)
    }).not.toThrow()
  })
})
