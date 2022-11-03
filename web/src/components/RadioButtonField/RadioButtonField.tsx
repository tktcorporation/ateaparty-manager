type Options = {
  value: string
  label: string
}[]
interface Props {
  options: Options
  value: string
  loading?: boolean
  setValue: (value: string) => void
}
const RadioButtonField = ({ options, value, setValue, loading }: Props) => {
  return (
    <fieldset>
      <div className="space-y-1">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              name="staff-will"
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => setValue(option.value)}
              disabled={loading}
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
            />
            <label htmlFor={option.value} className="ml-3 font-medium">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default RadioButtonField
