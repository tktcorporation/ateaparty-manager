import TeaPartiesCell from 'src/components/TeaParty/cells/TeaPartiesCell'
import TeaPartyNewFormCell from 'src/components/TeaParty/cells/TeaPartyNewFormCell'

const TeaPartiesPage = () => {
  return (
    <div className="container mx-auto my-8">
      {/* <h1 className="mb-4 text-3xl">お茶会</h1> */}
      <TeaPartiesCell />
      <div className="mt-16">
        <h3>新しいお茶会の予定</h3>
        <TeaPartyNewFormCell />
      </div>
    </div>
  )
}

export default TeaPartiesPage
