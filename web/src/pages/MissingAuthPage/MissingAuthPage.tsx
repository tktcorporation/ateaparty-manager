import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools'

const MissingAuthPage = () => {
  const { loading, logOut, logIn, isAuthenticated, currentUser } = useAuth()
  const roles = currentUser?.roles
  if (
    roles &&
    Array.isArray(roles) &&
    roles.filter((r) => r === 'member').length > 0
  ) {
    navigate(routes.dashboard())
  }
  return (
    <>
      <MetaTags title="MissingAuth" description="MissingAuth page" />

      {/* show a message to describe missing a auth */}
      <div className="mt-32 flex w-full flex-col text-center">
        <h1 className="text-5xl font-bold text-gray-900 md:text-7xl lg:text-7xl">
          <span className="block">題名のないお茶会のメンバーになっている</span>
          <span className="block">アカウントでログインしてください🙇</span>
        </h1>
        <div className="mt-10 sm:mt-12">
          <p>roles: {roles}</p>
          <div className="mt-5">
            <UserAuthTools
              loading={loading}
              isAuthenticated={isAuthenticated}
              logIn={logIn}
              logOut={logOut}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MissingAuthPage
