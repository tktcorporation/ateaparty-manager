import { useAuth } from '@redwoodjs/auth'

const { loading, logIn, logOut } = useAuth()

export const useLogin = () => {
  const searchParams = new URLSearchParams(window.location.search)
  return {
    loading,
    login: async () =>
      logIn({ appState: { targetUrl: searchParams.get('redirectTo') } }),
  }
}

export const useLogout = () => {
  return {
    loading,
    logout: () => logOut({ returnTo: window.location.origin }),
  }
}

export const useSession = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return {
    isAuthenticated,
    currentUser,
  }
}
