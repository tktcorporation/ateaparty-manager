import { render } from '@redwoodjs/testing/web'

import EditTeaPartyForm from './EditTeaPartyForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditTeaPartyForm', () => {
  it('renders successfully', () => {
    const teaParty = {
      id: 1,
      mcStaffId: undefined,
      mcSubStaffId: undefined,
      scheduledAt: '2021-09-01T00:00:00.000Z',
    }
    expect(() => {
      render(
        <EditTeaPartyForm
          members={[]}
          teaParty={teaParty}
          onSave={() => {}}
          error={null}
          loading={false}
        />
      )
    }).not.toThrow()
  })
})
