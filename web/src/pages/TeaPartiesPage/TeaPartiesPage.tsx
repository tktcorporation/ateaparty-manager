import { PlusIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NextTeaPartyCell from 'src/components/NextTeaPartyCell'
import TeaPartiesCell from 'src/components/ScafoldTeaParty/TeaPartiesCell'

const TeaPartiesPage = () => {
  return (
    <>
      <MetaTags title="TeaParties" description="TeaParties page" />

      <div className="align-center flex flex-col flex-wrap justify-center text-center">
        <div className="mt-4 text-xl">
          <NextTeaPartyCell />
        </div>
      </div>

      <div className="align-center mt-8 flex flex-col justify-center text-center">
        <div className="mt-4">
          <TeaPartiesCell />
        </div>
        <div className="flex justify-end">
          <Link
            className="btn-outline btn-primary btn-sm btn-circle btn ml-3"
            to={routes.teaParty()}
          >
            <PlusIcon className="h-4" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default TeaPartiesPage
