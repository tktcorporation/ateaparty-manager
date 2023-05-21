type LandingLayoutProps = {
  children?: React.ReactNode
}

import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Symbol from 'src/assets/Logo_symbol.svg'
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools'

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const navigation = [
    { name: 'お茶会', href: routes.teaParties() },
    { name: 'スタッフ', href: undefined },
  ]
  const { loading, isAuthenticated, logIn, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="mx-auto flex justify-center">
        <div className="flex w-full flex-col md:max-w-screen-2xl">
          <Popover>
            <div className="relative p-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link to={routes.home()}>
                      <span className="sr-only">Your Company</span>
                      <Symbol className="md:h-18 h-12" />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <UserAuthTools
                    loading={loading}
                    size="base"
                    isAuthenticated={isAuthenticated}
                    logIn={logIn}
                    logOut={logOut}
                  />
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform transition md:hidden"
              >
                <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-end px-5 pt-4">
                    <div className="-mr-2">
                      <Popover.Button className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="shrink space-y-6 px-5 py-6">
                      <UserAuthTools
                        loading={loading}
                        isAuthenticated={isAuthenticated}
                        logIn={logIn}
                        logOut={logOut}
                      />
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default LandingLayout
