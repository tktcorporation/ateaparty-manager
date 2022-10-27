import { render } from '@redwoodjs/testing/web'

import CheckBoxField from './CheckBoxField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckBoxField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckBoxField />)
    }).not.toThrow()
  })
})
