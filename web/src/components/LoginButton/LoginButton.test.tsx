import { render } from '@redwoodjs/testing/web'

import LoginButton from './LoginButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginButton', () => {
  it('renders successfully', () => {
    const Component = () => {
      const logIn = async () => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setLoading(false)
      }
      const [loading, setLoading] = React.useState(false)
      return <LoginButton loading={loading} logIn={logIn} />
    }
    expect(() => {
      render(<Component />)
    }).not.toThrow()
  })
})
