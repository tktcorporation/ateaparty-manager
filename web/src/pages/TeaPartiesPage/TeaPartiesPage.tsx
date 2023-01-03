import { MicrophoneIcon, PlusIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TeaPartyCell from 'src/components/TeaPartyCell'

const TeaPartiesPage = () => {
  const teaParties = [
    {
      id: 1,
      date: new Date(),
      mc: 'Taro',
    },
    {
      id: 2,
      date: new Date(),
      mc: 'Jiro',
    },
  ]
  return (
    <>
      <MetaTags title="TeaParties" description="TeaParties page" />

      <div className="align-center flex flex-col flex-wrap justify-center text-center">
        <h1 className="text-3xl">次のお茶会は</h1>
        <div className="mt-4 text-xl">
          <TeaPartyCell id={1} />
        </div>
      </div>

      <div className="align-center mt-8 flex flex-col justify-center text-center">
        <h2 className="inline-flex items-center self-center text-2xl">
          <span>次回以降</span>
          <button className="btn btn-outline btn-primary btn-circle btn-xs ml-3">
            <Link to={routes.teaParty()}>
              <PlusIcon className="h-4" />
            </Link>
          </button>
        </h2>
        <ul className="mt-4 grid grid-cols-3 gap-4">
          {teaParties.map((teaParty) => (
            <li key={teaParty.id}>
              <p className="text-lg">
                {teaParty.date.toLocaleDateString('ja-JP')}
              </p>

              <p>
                <MicrophoneIcon className="inline-flex h-4" />
                <span className="ml-1">
                  {teaParty.mc || 'まだ決まってないよ！'}
                </span>
              </p>
              <Link to={routes.teaParty()}>司会者を選ぶ</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TeaPartiesPage
