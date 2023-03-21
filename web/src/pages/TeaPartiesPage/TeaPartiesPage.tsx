import { useState } from 'react'

import TeaPartiesList from 'src/components/TeaPartiesList/TeaPartiesList'
import TeaPartyForm from 'src/components/TeaPartyForm/TeaPartyForm'

const TeaPartiesPage = () => {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-4 text-3xl">Tea Parties</h1>
      <button
        onClick={toggleForm}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Create Tea Party
      </button>
      {showForm && <TeaPartyForm onSave={toggleForm} />}
      <TeaPartiesList />
    </div>
  )
}

export default TeaPartiesPage
