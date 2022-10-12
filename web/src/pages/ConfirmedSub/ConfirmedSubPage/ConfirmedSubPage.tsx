import ConfirmedSubCell from 'src/components/ConfirmedSub/ConfirmedSubCell'

type ConfirmedSubPageProps = {
  id: number
}

const ConfirmedSubPage = ({ id }: ConfirmedSubPageProps) => {
  return <ConfirmedSubCell id={id} />
}

export default ConfirmedSubPage
