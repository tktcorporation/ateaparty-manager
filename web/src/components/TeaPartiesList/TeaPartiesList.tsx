const dummyData = [
  {
    id: 1,
    date: '2023-03-21',
    host: { id: 1, name: 'Host 1' },
    subHost: { id: 2, name: 'Sub Host 1' },
  },
  {
    id: 2,
    date: '2023-03-28',
    host: { id: 2, name: 'Host 2' },
    subHost: { id: 1, name: 'Sub Host 2' },
  },
]

const TeaPartiesList = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="bg-gray-100 p-4 text-xl font-bold">Tea Parties</div>
      <div className="divide-y divide-gray-200">
        {dummyData.map((teaParty) => (
          <div key={teaParty.id} className="grid grid-cols-3 p-4">
            <div className="text-gray-700">{teaParty.date}</div>
            <div className="text-gray-700">{teaParty.host.name}</div>
            <div className="text-gray-700">{teaParty.subHost.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeaPartiesList
