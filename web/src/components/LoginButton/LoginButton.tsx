import { useAuth } from '@redwoodjs/auth'

interface LoginButtonProps {
  className?: string
}
const LoginButton = ({ className }: LoginButtonProps) => {
  const { loading, logIn } = useAuth()
  if (loading) {
    return (
      <button
        type="button"
        className={
          className +
          ' inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        }
      >
        <svg
          className="-ml-1 mr-2 h-5 w-5 animate-spin"
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
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        Loading...
      </button>
    )
  }
  return (
    <button
      type="button"
      className={
        className +
        'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      }
      onClick={async () => {
        const searchParams = new URLSearchParams(window.location.search)
        await logIn({
          appState: { targetUrl: searchParams.get('redirectTo') },
        })
      }}
    >
      Log in
    </button>
  )
}

export default LoginButton
