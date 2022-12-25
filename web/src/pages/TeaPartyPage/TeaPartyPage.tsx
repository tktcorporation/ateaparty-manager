import { MetaTags } from '@redwoodjs/web'

import NewTeaParty from 'src/components/ScafoldTeaParty/NewTeaParty'

const TeaPartyPage = () => {
  return (
    <>
      <MetaTags title="TeaParty" description="TeaParty page" />

      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* 2 columns on desktop, 1 column on mobile */}
        <div className="mt-10 w-full flex-1 flex-col items-center justify-center md:w-3/4 md:flex-row">
          <NewTeaParty />
        </div>
      </div>
    </>
  )
}

export default TeaPartyPage
