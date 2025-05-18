import { IoAdd } from "react-icons/io5"
import type { MouseEventHandler } from "react"

interface AddTodoItemProps {
  onClick: (value: string) => void
}

export default function AddTodoItem({ onClick }: AddTodoItemProps) {
  return (
    <li
      onClick={() => onClick("test")}
      className="mt-1 inline-flex items-center"
    >
      <IoAdd className="inline h-4 w-4 text-gray-400 hover:text-gray-700" />
      <span className="ml-4 cursor-pointer text-base text-gray-400 hover:text-gray-700">
        Aufgabe hinzufügen
      </span>
    </li>
  )
}
