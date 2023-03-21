import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeaPartiesPage = () => {
  return (
    <>
      <MetaTags title="TeaParties" description="TeaParties page" />

      <h1>TeaPartiesPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeaPartiesPage/TeaPartiesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teaParties</code>, link to me with `
        <Link to={routes.teaParties()}>TeaParties</Link>`
      </p>
    </>
  )
}

export default TeaPartiesPage
