import TeaPartyCell from 'src/components/TeaParty/TeaPartyCell'

type TeaPartyPageProps = {
  id: number
}

const TeaPartyPage = ({ id }: TeaPartyPageProps) => {
  return <TeaPartyCell id={id} />
}

export default TeaPartyPage
