import EditTeaPartyCell from 'src/components/TeaParty/EditTeaPartyCell'

type TeaPartyPageProps = {
  id: number
}

const EditTeaPartyPage = ({ id }: TeaPartyPageProps) => {
  return <EditTeaPartyCell id={id} />
}

export default EditTeaPartyPage
