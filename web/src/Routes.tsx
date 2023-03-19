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
      <Route path="/calendar" page={CalendarPage} name="calendar" />
      <Route path="/manage-concert" page={ManageConcertPage} name="manageConcert" />
      <Route path="/logout" page={LogoutPage} name="logout" />
      <Private unauthenticated="home" roles={Role.admin}>
        <Set wrap={ScaffoldLayout} title="ConfirmedSubs" titleTo="confirmedSubs" buttonLabel="New ConfirmedSub" buttonTo="newConfirmedSub">
          <Route path="/confirmed-subs/new" page={ConfirmedSubNewConfirmedSubPage} name="newConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}/edit" page={ConfirmedSubEditConfirmedSubPage} name="editConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}" page={ConfirmedSubConfirmedSubPage} name="confirmedSub" />
          <Route path="/confirmed-subs" page={ConfirmedSubConfirmedSubsPage} name="confirmedSubs" />
        </Set>
      </Private>
      <Private unauthenticated="missingAuth" roles={Role.confirmed}>
        <Set wrap={ScaffoldLayout} title="TeaParties" titleTo="teaParties" buttonLabel="New TeaParty" buttonTo="newTeaParty">
          <Route path="/scafold-tea-parties/new" page={ScafoldTeaPartyNewTeaPartyPage} name="scafoldNewTeaParty" />
          <Route path="/scafold-tea-parties/{id:Int}/edit" page={ScafoldTeaPartyEditTeaPartyPage} name="scafoldEditTeaParty" />
          <Route path="/scafold-tea-parties/{id:Int}" page={ScafoldTeaPartyTeaPartyPage} name="scafoldTeaParties" />
          <Route path="/scafold-tea-parties" page={ScafoldTeaPartyTeaPartiesPage} name="scafoldTeaParties" />
        </Set>
      </Private>
      <Private unauthenticated="missingAuth" roles={Role.member}>
        <Set wrap={AuthLayout}>
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
          <Route path="/mini-concert" page={MiniConcertPage} name="miniConcert" />
          <Route path="/tea-parties" page={TeaPartiesPage} name="teaParties" />
          <Route path="/tea-parties/new" page={TeaPartyPage} name="teaParty" />
          <Route path="/tea-parties/{id:Int}/edit" page={EditTeaPartyPage} name="editTeaParty" />
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
