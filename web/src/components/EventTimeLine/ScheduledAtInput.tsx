const ScheduledAtInput = ({ scheduledAt, onScheduledAtChange }) => {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block font-bold text-gray-700"
        htmlFor="scheduledAt"
      >
        予定日時
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        id="scheduledAt"
        type="datetime-local"
        placeholder="予定日時を入力してください"
        value={scheduledAt}
        onChange={(e) => onScheduledAtChange(e.target.value)}
      />
    </div>
  )
}
export default ScheduledAtInput
