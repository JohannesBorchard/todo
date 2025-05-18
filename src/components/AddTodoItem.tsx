import { useState, useRef, useEffect } from "react"
import { IoAdd } from "react-icons/io5"

interface AddTodoItemProps {
  onClick: (value: string) => void
}

export default function AddTodoItem({ onClick }: AddTodoItemProps) {
  const [isWritable, setIsWritable] = useState(false)
  const inputEl = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("")

  function handleSubmit() {
    const val = inputValue.trim()
    if (val) {
      onClick(val)
      setInputValue("")
      setIsWritable(false)
    }
  }

  useEffect(() => {
    if (isWritable) {
      inputEl.current?.focus()
    }
  }, [isWritable])

  return !isWritable ? (
    <li
      onClick={() => setIsWritable(true)}
      className="mt-1 inline-flex items-center"
    >
      <IoAdd className="inline h-4 w-4 text-gray-400 hover:text-gray-700" />
      <span className="ml-4 cursor-pointer text-base text-gray-400 hover:text-gray-700">
        Aufgabe hinzufügen
      </span>
    </li>
  ) : (
    <li className="relative mt-1 w-64">
      <input
        type="text"
        id="inputEl"
        ref={inputEl}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit()
        }}
        onBlur={() => setIsWritable(false)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Aufgabe eingeben"
        className="peer mt-0.5 w-full rounded border-gray-300 py-2 pl-3 shadow-sm focus:outline-2 focus:outline-blue-500 sm:text-sm"
      />
      <span
        onClick={handleSubmit}
        className="absolute inset-y-0 top-0.5 right-1 grid w-8 place-content-center"
      >
        <button
          type="button"
          aria-label="Submit"
          className="rounded-sm p-1 text-gray-700 transition-colors hover:bg-gray-100"
        >
          <IoAdd className="h-5 w-5" />
        </button>
      </span>
    </li>
  )
}
