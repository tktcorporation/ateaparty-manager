interface UserAuthToolsProps {
  loading: boolean
  isAuthenticated: boolean
  logIn: (logInProps: { [key: string]: unknown }) => Promise<unknown>
  logOut: (logOutProps: { [key: string]: unknown }) => Promise<unknown>
}
const UserAuthTools = ({
  loading,
  isAuthenticated,
  logIn,
  logOut,
}: UserAuthToolsProps) => {
  return (
    <button
      className={
        'inline-flex items-center rounded-md border-2 border-primary-400 px-4 py-2 text-xl font-medium text-primary transition' +
        ' ' +
        (loading
          ? 'cursor-progress'
          : 'hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2')
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
      {!loading ? (
        isAuthenticated ? (
          'ログアウト'
        ) : (
          'ログイン'
        )
      ) : (
        <svg
          className="ml-3 mr-3 h-5 w-5 animate-spin text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  )
}

export default UserAuthTools
