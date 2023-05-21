import TeaPartyNewFormCell from 'src/components/TeaParty/cells/TeaPartyNewFormCell'

export const QUERY = gql`
  query TeaPartiesQuery {
    teaParties {
      id
      hostId
      cohostId
      date
    }
    members {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ teaParties }) => {
  return (
    <>
      <ul className="rw-list-unstyled">
        {teaParties.map((teaParty) => (
          <li
            key={teaParty.id}
            data-testid={`tea-party-${teaParty.id}`}
            // className="rw-segment rw-table-wrapper-flex"
          >
            <div>{teaParty.date}</div>
            <div>Host: {teaParty.hostId}</div>
            <div>Cohost: {teaParty.cohostId}</div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3>新しいお茶会の予定</h3>
        <TeaPartyNewFormCell />
      </div>
    </>
  )
}
