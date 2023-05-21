import { useEffect, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LogoutPage = () => {
  const { logOut } = useAuth()
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    logOut()
      .then(() => {
        setIsLoggedOut(true)
      })
      .catch((err) => {
        setError(err)
      })
  }, [logOut])

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (isLoggedOut) {
    return <Redirect to={routes.home()} />
  }

  return (
    <>
      <MetaTags title="Logout" description="Logout page" />

      <h1>Logout</h1>
    </>
  )
}

export default LogoutPage
