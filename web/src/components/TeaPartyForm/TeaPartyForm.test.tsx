import { RWGqlError } from '@redwoodjs/forms'
import { render } from '@redwoodjs/testing/web'

import TeaPartyForm from './TeaPartyForm'

import { TeaPartyFormProps } from '.'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeaPartyForm', () => {
  it('renders successfully', () => {
    const props: TeaPartyFormProps = {
      members: [
        {
          id: 1,
          name: 'String',
        },
      ],
      onSave: (_data: unknown, _id?: number) => {},
      error: undefined as unknown as RWGqlError,
      loading: false,
    }
    expect(() => {
      render(<TeaPartyForm {...props} />)
    }).not.toThrow()
  })
})
