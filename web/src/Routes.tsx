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

import LandingLayout from './layouts/LandingLayout/LandingLayout'
import { Role } from './lib/auth'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" roles={Role.admin}>
        <Set wrap={ScaffoldLayout} title="ConfirmedSubs" titleTo="confirmedSubs" buttonLabel="New ConfirmedSub" buttonTo="newConfirmedSub">
          <Route path="/confirmed-subs/new" page={ConfirmedSubNewConfirmedSubPage} name="newConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}/edit" page={ConfirmedSubEditConfirmedSubPage} name="editConfirmedSub" />
          <Route path="/confirmed-subs/{id:Int}" page={ConfirmedSubConfirmedSubPage} name="confirmedSub" />
          <Route path="/confirmed-subs" page={ConfirmedSubConfirmedSubsPage} name="confirmedSubs" />
        </Set>
      </Private>
      <Private unauthenticated="home" roles={Role.confirmed}>
        <Set wrap={ScaffoldLayout} title="TeaParties" titleTo="teaParties" buttonLabel="New TeaParty" buttonTo="newTeaParty">
          <Route path="/tea-parties/new" page={TeaPartyNewTeaPartyPage} name="newTeaParty" />
          <Route path="/tea-parties/{id:Int}/edit" page={TeaPartyEditTeaPartyPage} name="editTeaParty" />
          <Route path="/tea-parties/{id:Int}" page={TeaPartyTeaPartyPage} name="teaParty" />
          <Route path="/tea-parties" page={TeaPartyTeaPartiesPage} name="teaParties" />
        </Set>
      </Private>
      <Set wrap={LandingLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
