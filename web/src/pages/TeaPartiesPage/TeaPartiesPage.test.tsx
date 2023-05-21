import { render } from '@redwoodjs/testing'
import { mockGraphQLQuery } from '@redwoodjs/testing'

import TeaPartiesPage from './TeaPartiesPage'

const mockData = {
  teaParties: [
    {
      id: 1,
      host: {
        id: 1,
        name: 'host1',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      cohost: {
        id: 2,
        name: 'cohost1',
        avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
      },
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
    expect(() => {
      render(<TeaPartiesPage />)
    }).not.toThrow()

    // Wait for the data to be loaded and the component to be rendered.
    // await waitFor(() =>
    //   expect(screen.queryByText('次回のお茶会は')).toBeInTheDocument()
    // )

    // // Now that the component has rendered, we can run our checks.
    // mockData.teaParties.forEach((teaParty) => {
    //   const listItem = screen.getByTestId(`tea-party-${teaParty.id}`)
    //   within(listItem).getByText(`サブ司会`)
    //   within(listItem).getByText('司会')
    // })
  })
})
