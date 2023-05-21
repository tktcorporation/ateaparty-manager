import { render, waitFor } from '@redwoodjs/testing/web'

import LogoutPage from './LogoutPage'

describe('LogoutPage', () => {
  it('renders successfully', async () => {
    await waitFor(() => {
      expect(() => {
        render(<LogoutPage />)
      }).not.toThrow()
    })
  })
})
