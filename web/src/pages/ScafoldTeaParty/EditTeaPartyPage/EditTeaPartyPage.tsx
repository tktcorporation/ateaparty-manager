import EditTeaPartyCell from 'src/components/ScafoldTeaParty/EditTeaPartyCell'

type TeaPartyPageProps = {
  id: number
}

const EditTeaPartyPage = ({ id }: TeaPartyPageProps) => {
  return <EditTeaPartyCell id={id} />
}

export default EditTeaPartyPage
