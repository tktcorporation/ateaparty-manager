interface UserAuthToolsProps {
  loading: boolean
  isAuthenticated: boolean
  size?: 'sm' | 'base' | 'lg' | 'xl'
  logIn: (logInProps: { [key: string]: unknown }) => Promise<unknown>
  logOut: (logOutProps: { [key: string]: unknown }) => Promise<unknown>
}
const UserAuthTools = ({
  loading,
  isAuthenticated,
  size = 'xl',
  logIn,
  logOut,
}: UserAuthToolsProps) => {
  return (
    <button
      className={
        'btn btn-outline inline-flex items-center px-4 py-2 transition' +
        ' ' +
        (loading ? 'loading' : '') +
        ' ' +
        `btn-${size}` +
        ' ' +
        (isAuthenticated ? '' : 'btn-primary')
      }
      disabled={loading}
      onClick={async () => {
        if (isAuthenticated) {
          await logOut({ returnTo: process.env.AUTH0_REDIRECT_URI })
        } else {
          const searchParams = new URLSearchParams(window.location.search)
          await logIn({
            appState: { targetUrl: searchParams.get('redirectTo') },
          })
        }
      }}
    >
      {isAuthenticated ? 'ログアウト' : 'ログイン'}
    </button>
  )
}

export default UserAuthTools
