import { useState } from 'react'

import ToggleField from 'src/components/ToggleField/ToggleField'

import StaffWantToDo from '../StaffWantToDo/StaffWantToDo'
import WorkDontWantToDo from '../WorkDontWantToDo/WorkDontWantToDo'
import WorkWantToDo from '../WorkWantToDo/WorkWantToDo'

const MiniConcertStaffRegistrationForm = () => {
  // 参加希望か
  const [isParticipate, setIsParticipate] = useState(false)
  return (
    <div>
      <h2>スタッフ参加登録</h2>
      <ToggleField
        label="スタッフ参加を希望する"
        name="staff"
        checked={isParticipate}
        onChange={setIsParticipate}
      />
      {isParticipate && (
        <div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6">
            <StaffWantToDo />
          </div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6">
            <WorkWantToDo />
          </div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6">
            <WorkDontWantToDo />
          </div>
        </div>
      )}
    </div>
  )
}

export default MiniConcertStaffRegistrationForm
