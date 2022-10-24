import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Logo from 'src/assets/Logo_yokogumi.svg'
import LoginButton from 'src/components/LoginButton/LoginButton'

const HomePage = () => {
  const { loading, logIn, isAuthenticated } = useAuth()
  if (isAuthenticated) {
    navigate(routes.dashboard())
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="mt-32 flex w-full flex-col text-center">
        <h1 className="text-5xl font-bold text-gray-900 md:text-7xl lg:text-7xl">
          <span className="block">Welcome to</span>
          <Logo className="inline w-auto lg:w-9/12 lg:shrink" />
        </h1>
        <div className="mt-10 sm:mt-12">
          <LoginButton
            loading={loading}
            logIn={logIn}
            label={'Discordアカウントで始める'}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
