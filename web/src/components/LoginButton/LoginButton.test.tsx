import { render } from '@redwoodjs/testing/web'

import LoginButton from './LoginButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginButton', () => {
  it('renders successfully', () => {
    const [loading, setLoading] = React.useState(false)
    const logIn = async () => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
    }
    expect(() => {
      render(<LoginButton loading={loading} logIn={logIn} />)
    }).not.toThrow()
  })
})
