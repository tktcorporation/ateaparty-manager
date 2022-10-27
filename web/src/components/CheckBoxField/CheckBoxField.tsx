import { useEffect, useState } from 'react'

interface Props {
  options: {
    value: string
    label: string
  }[]
  setSelectedIdList: (idList: string[]) => void
}
const CheckBoxField = ({ options, setSelectedIdList }: Props) => {
  const [selectedIdList, setSelectedIdListState] = useState<string[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value
    if (event.target.checked) {
      setSelectedIdListState([...selectedIdList, id])
    } else {
      setSelectedIdListState(
        selectedIdList.filter((selectedId) => selectedId !== id)
      )
    }
  }
  useEffect(() => {
    setSelectedIdList(selectedIdList)
  }, [selectedIdList, setSelectedIdList])
  return (
    <fieldset className="mb-6">
      <div className="mt-4 space-y-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              name={option.value}
              type="checkbox"
              value={option.value}
              checked={selectedIdList.includes(option.value)}
              onChange={handleChange}
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor={option.value}
              className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default CheckBoxField
