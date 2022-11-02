import { Switch } from '@headlessui/react'

interface ToggleFieldProps {
  label: string
  name: string
  checked: boolean
  loading?: boolean
  onChange: (value: boolean) => void
}
const ToggleField = ({
  label,
  name,
  checked,
  loading,
  onChange,
}: ToggleFieldProps): JSX.Element => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch.Label as="span" className="mr-4">
        {label}
      </Switch.Label>
      <Switch
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={loading}
        className={`${
          checked ? 'bg-indigo-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </Switch.Group>
  )
}

export default ToggleField
