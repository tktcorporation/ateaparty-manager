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
        <h1 className="text-3xl">次のお茶会は</h1>
        <div className="mt-4 text-xl">
          <NextTeaPartyCell />
        </div>
      </div>

      <div className="align-center mt-8 flex flex-col justify-center text-center">
        <h2 className="inline-flex items-center self-center text-2xl">
          <span>次回以降</span>
          <button className="btn btn-circle btn-outline btn-primary btn-xs ml-3">
            <Link to={routes.teaParty()}>
              <PlusIcon className="h-4" />
            </Link>
          </button>
        </h2>

        <TeaPartiesCell />
      </div>
    </>
  )
}

export default TeaPartiesPage
