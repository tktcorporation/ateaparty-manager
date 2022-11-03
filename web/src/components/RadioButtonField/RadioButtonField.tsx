type Options = {
  value: string
  label: string
}[]
interface Props {
  options: Options
  value: string
  loading?: boolean
  name: string
  setValue: (value: string) => void
}
const RadioButtonField = ({
  options,
  value,
  setValue,
  loading,
  name,
}: Props) => {
  return (
    <fieldset>
      <div className="space-y-1">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => setValue(option.value)}
              disabled={loading}
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="ml-3 font-medium"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default RadioButtonField
