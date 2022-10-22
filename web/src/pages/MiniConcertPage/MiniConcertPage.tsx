import { MetaTags } from '@redwoodjs/web'

import NavigationCard from 'src/components/NavigationCard/NavigationCard'

const MiniConcertPage = () => {
  const navigateToList = [
    {
      name: '参加登録',
      path: undefined,
      description: 'ミニコンサートへの参加登録',
    },
    {
      name: 'スタッフ登録',
      path: undefined,
      description: 'ミニコンサートのスタッフ登録',
    },
  ]
  return (
    <>
      <MetaTags title="MiniConcert" description="MiniConcert page" />

      <div className="flex h-full w-full flex-col items-center justify-center md:mt-20">
        {/* 2 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {navigateToList.map((item) => (
            <NavigationCard
              key={item.name}
              title={item.name}
              route={item.path}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MiniConcertPage
