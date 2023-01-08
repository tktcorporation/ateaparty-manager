import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools'
import { useMemberRegistration } from 'src/composables/memberRegistration'

const MissingAuthPage = () => {
  const {
    loading: authLoading,
    logOut,
    logIn,
    isAuthenticated,
    currentUser,
  } = useAuth()
  const { loading: registrationLoading, createMember } = useMemberRegistration()
  const { roles, name, pictureUrl } = currentUser || {}
  useEffect(() => {
    if (
      roles &&
      Array.isArray(roles) &&
      roles.filter((r) => r === 'member').length > 0
    ) {
      navigate(routes.dashboard())
    }
  }, [roles])
  return (
    <>
      <MetaTags title="MissingAuth" description="MissingAuth page" />

      <div className="flex h-full w-full justify-center">
        <div className="flex flex-col rounded-md border py-16 px-32 text-center shadow">
          <div className="flex items-center justify-center">
            <img
              src={pictureUrl}
              className="inline-flex h-16 w-16 rounded-full"
              alt="avatar"
            />
            <div className="ml-2">
              <p className="text-4xl">{name}</p>
            </div>
          </div>
          <div className="mt-10 text-center text-xl">
            <p>上記のユーザーとしてログインしています</p>
            <p>お茶会のメンバーとして登録を行いますか？</p>
          </div>
          <div className="mt-10">
            <button
              className={
                'btn btn-primary btn-wide ' +
                (registrationLoading ? 'loading' : '')
              }
              onClick={() => createMember()}
            >
              メンバー登録する
            </button>
            <div className="mt-5">
              <UserAuthTools
                loading={authLoading}
                isAuthenticated={isAuthenticated}
                size="sm"
                logIn={logIn}
                logOut={logOut}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MissingAuthPage
