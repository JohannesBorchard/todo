export default function TodoItem({
  value = "Todo",
  isChecked = false,
  todoId = "check-1"
}) {
  return (
    <li>
      <div className="inline-flex items-center">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="ml-4 cursor-pointer text-base text-slate-800"
          htmlFor={todoId}
        >
          {value}
        </label>
      </div>
    </li>
  )
}
