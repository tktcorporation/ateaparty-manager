const McStaffInput = ({
  mcStaff,
  onMcStaffChange,
  mcSubStaff,
  onMcSubStaffChange,
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700" htmlFor="mcStaff">
          司会者
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="mcStaff"
          type="text"
          placeholder="司会者を入力してください"
          value={mcStaff}
          onChange={(e) => onMcStaffChange(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="mcSubStaff"
        >
          サブ司会者
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="mcSubStaff"
          type="text"
          placeholder="サブ司会者を入力してください"
          value={mcSubStaff}
          onChange={(e) => onMcSubStaffChange(e.target.value)}
        />
      </div>
    </>
  )
}
export default McStaffInput
