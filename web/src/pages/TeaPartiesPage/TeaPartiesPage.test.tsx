import { within } from '@testing-library/dom'

import { render, screen, waitFor } from '@redwoodjs/testing'
import { mockGraphQLQuery } from '@redwoodjs/testing'

import TeaPartiesPage from './TeaPartiesPage'

const mockData = {
  teaParties: [
    {
      id: 1,
      hostId: 'host1',
      cohostId: 'cohost1',
      date: '2023-05-21',
    },
    // ...other mock tea parties...
  ],
  members: [
    {
      id: 1,
      name: 'member1',
    },
    // ...other mock members...
  ],
}

describe('TeaPartiesPage', () => {
  beforeEach(() => {
    mockGraphQLQuery('TeaPartiesQuery', () => mockData)
  })

  it('renders successfully', async () => {
    render(<TeaPartiesPage />)
    // Wait for the data to be loaded and the component to be rendered.
    await waitFor(() =>
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    )

    // Now that the component has rendered, we can run our checks.
    mockData.teaParties.forEach((teaParty) => {
      const listItem = screen.getByTestId(`tea-party-${teaParty.id}`)
      within(listItem).getByText(`Host: ${teaParty.hostId}`)
      within(listItem).getByText(`Cohost: ${teaParty.cohostId}`)
      within(listItem).getByText(teaParty.date)
    })
  })
})
