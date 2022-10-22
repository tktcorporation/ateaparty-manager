import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NavigationCard from 'src/components/NavigationCard/NavigationCard'

const DashboardPage = () => {
  const navigateToList = [
    {
      name: 'Tea Parties',
      path: routes.teaParties(),
      description: 'Tea Parties',
    },
    {
      name: 'Coming Soon',
      path: routes.confirmedSubs(),
      description: 'Confirmed Subs',
    },
    {
      name: 'Coming Soon',
      path: undefined,
      description: '近日公開',
    },
    {
      name: 'Coming Soon',
      path: undefined,
      description: '近日公開',
    },
  ]
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className="flex h-full w-full flex-col items-center justify-center">
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

export default DashboardPage
