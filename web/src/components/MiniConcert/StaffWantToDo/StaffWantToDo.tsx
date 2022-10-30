import { useState } from 'react'

import RadioButtonField from 'src/components/RadioButtonField/RadioButtonField'

const StaffWantToDo = () => {
  // 参加希望か
  const options = [
    { value: 'will', label: 'スタッフ参加したい' },
    { value: 'smallWill', label: 'そこそこ参加したい' },
    {
      value: 'help',
      label: '助っ人参加 (足りなくて困ったときにお願いします)',
    },
  ]
  const [staffWill, setStaffWill] = useState('will')
  return (
    <>
      <legend className="text-sm font-medium text-gray-900 dark:text-gray-300">
        スタッフ参加の希望度合いを教えてください
      </legend>
      <RadioButtonField
        options={options}
        setValue={setStaffWill}
        value={staffWill}
      />
    </>
  )
}

export default StaffWantToDo
