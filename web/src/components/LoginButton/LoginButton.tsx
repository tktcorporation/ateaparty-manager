interface LoginButtonProps {
  label?: string
  loading: boolean
  logIn: (loginProps: { appState: { targetUrl: string } }) => Promise<unknown>
}
const LoginButton = ({ loading, logIn, label }: LoginButtonProps) => {
  return (
    <button
      type="button"
      className={
        'btn btn-outline btn-primary inline-flex items-center px-4 py-2 transition' +
        ' ' +
        (loading ? 'loading' : '')
      }
      disabled={loading}
      onClick={async () => {
        const searchParams = new URLSearchParams(window.location.search)
        await logIn({
          appState: { targetUrl: searchParams.get('redirectTo') },
        })
      }}
    >
      {!loading ? (label ? label : 'ログイン') : 'LOADING'}
    </button>
  )
}

export default LoginButton
