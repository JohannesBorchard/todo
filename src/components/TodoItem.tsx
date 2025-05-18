import { useState } from "react"
import { BsCheck } from "react-icons/bs"
import { IoClose } from "react-icons/io5"

interface TodoItemProps {
  value?: string
  isChecked?: boolean
  todoId?: string
  removeAction: () => void
  toggleTodoAction: (checked: boolean) => void
}

export default function TodoItem({
  value = "Todo",
  isChecked = false,
  todoId = "check-1",
  removeAction,
  toggleTodoAction
}: TodoItemProps) {
  const [isVisible, setIsVisible] = useState(true)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setTimeout(() => {
        setIsVisible(false)
        toggleTodoAction(true)
      }, 1000)
    } else {
      toggleTodoAction(false)
    }
  }

  if (!isVisible) return null
  return (
    <li className="group inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center"
        htmlFor={todoId}
      >
        <input
          type="checkbox"
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-blue-500 checked:bg-blue-500 hover:shadow-lg"
          defaultChecked={isChecked}
          onChange={handleChange}
          id={todoId}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
          <BsCheck className="h-4 w-4" />
        </span>
      </label>
      <label
        className="ml-4 cursor-pointer text-base text-slate-800"
        htmlFor={todoId}
      >
        {value}
      </label>
      <IoClose
        onClick={removeAction}
        className="mt-0.5 ml-2 hidden h-4 w-4 cursor-pointer text-gray-300 transition-all group-hover:block hover:block hover:text-gray-700"
      />
    </li>
  )
}
