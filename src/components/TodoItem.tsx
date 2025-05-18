import { BsCheck } from "react-icons/bs"
export default function TodoItem({
  value = "Todo",
  isChecked = false,
  todoId = "check-1"
}) {
  return (
    <li className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center"
        htmlFor={todoId}
      >
        <input
          type="checkbox"
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 hover:shadow-lg"
          checked={isChecked}
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
    </li>
  )
}
