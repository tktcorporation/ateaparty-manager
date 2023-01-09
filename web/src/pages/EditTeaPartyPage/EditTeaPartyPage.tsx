import { MetaTags } from '@redwoodjs/web'

import EditTeaPartyCell from 'src/components/EditTeaPartyCell'

export interface TeaPartyPageProps {
  id: number
}
const EditTeaPartyPage = ({ id }: TeaPartyPageProps) => {
  return (
    <>
      <MetaTags title="EditTeaParty" description="EditTeaParty page" />

      <EditTeaPartyCell id={id} />
    </>
  )
}

export default EditTeaPartyPage
