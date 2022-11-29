import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ManageConcertPage = () => {
  return (
    <>
      <MetaTags title="ManageConcert" description="ManageConcert page" />

      <h1>ManageConcertPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ManageConcertPage/ManageConcertPage.tsx</code>
      </p>
      <p>
        My default route is named <code>manageConcert</code>, link to me with `
        <Link to={routes.manageConcert()}>ManageConcert</Link>`
      </p>
    </>
  )
}

export default ManageConcertPage
