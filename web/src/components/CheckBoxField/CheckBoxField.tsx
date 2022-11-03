import { useEffect, useState } from 'react'

interface Props {
  options: {
    value: string
    label: string
    description?: string
  }[]
  initialSelectedIdList: string[]
  setSelectedIdList: (idList: string[]) => void
}
const CheckBoxField = ({
  options,
  initialSelectedIdList,
  setSelectedIdList,
}: Props) => {
  const [selectedIdList, setSelectedIdListState] = useState<string[]>(
    initialSelectedIdList
  )
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
    <fieldset>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex">
            <input
              id={option.value}
              name={option.value}
              type="checkbox"
              value={option.value}
              checked={selectedIdList.includes(option.value)}
              onChange={handleChange}
              className="focus:ring-3 mt-1 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
            />
            <div className="ml-2">
              <label htmlFor={option.value} className="block font-medium">
                {option.label}
              </label>
              {option.description && (
                <p className="block text-sm text-gray-500">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default CheckBoxField
