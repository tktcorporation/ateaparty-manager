import { render } from '@redwoodjs/testing/web'

import NavigationCard from './NavigationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationCard />)
    }).not.toThrow()
  })
})
