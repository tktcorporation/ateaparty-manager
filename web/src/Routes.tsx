// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import AuthLayout from './layouts/AuthLayout/AuthLayout'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
import { Role } from './lib/auth'

const Routes = () => {
  return (
    <Router>
      <Route path="/logout" page={LogoutPage} name="logout" />
      <Private unauthenticated="home" roles={Role.admin}>
        <Set wrap={ScaffoldLayout} title="ConfirmedSubs" titleTo="confirmedSubs" buttonLabel="New ConfirmedSub" buttonTo="newConfirmedSub">
          <Route path="/confirmed-subs/new" page={ConfirmedSubNewConfirmedSubPage} name="newConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}/edit" page={ConfirmedSubEditConfirmedSubPage} name="editConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}" page={ConfirmedSubConfirmedSubPage} name="confirmedSub" />
          <Route path="/confirmed-subs" page={ConfirmedSubConfirmedSubsPage} name="confirmedSubs" />
        </Set>
      </Private>
      <Private unauthenticated="missingAuth" roles={Role.confirmed}></Private>
      <Private unauthenticated="missingAuth" roles={Role.member}>
        <Set wrap={AuthLayout}>
          <Route path="/tea-parties" page={TeaPartiesPage} name="teaParties" />
        </Set>
      </Private>
      <Set wrap={LandingLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Private unauthenticated="home">
          <Route path="/missing-auth" page={MissingAuthPage} name="missingAuth" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
