import EditConfirmedSubCell from 'src/components/ConfirmedSub/EditConfirmedSubCell'

type ConfirmedSubPageProps = {
  id: number
}

const EditConfirmedSubPage = ({ id }: ConfirmedSubPageProps) => {
  return <EditConfirmedSubCell id={id} />
}

export default EditConfirmedSubPage
