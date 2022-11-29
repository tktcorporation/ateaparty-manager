import TeaPartyCell from 'src/components/ScafoldTeaParty/TeaPartyCell'

type TeaPartyPageProps = {
  id: number
}

const TeaPartyPage = ({ id }: TeaPartyPageProps) => {
  return <TeaPartyCell id={id} />
}

export default TeaPartyPage
