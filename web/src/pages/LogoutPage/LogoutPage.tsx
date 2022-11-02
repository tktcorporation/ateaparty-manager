import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LogoutPage = () => {
  const { logOut } = useAuth()
  logOut().then(() => {
    return <Redirect to={routes.home()} />
  })

  return (
    <>
      <MetaTags title="Logout" description="Logout page" />

      <h1>Logout</h1>
    </>
  )
}

export default LogoutPage
