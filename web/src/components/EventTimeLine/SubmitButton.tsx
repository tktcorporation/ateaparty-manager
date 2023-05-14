interface Props {
  onClick: (unknown) => void
  children: React.ReactNode
}

const SubmitButton = ({ onClick, children }: Props) => {
  return (
    <button
      className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SubmitButton
