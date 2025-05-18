import { IoStar } from "react-icons/io5"
import TodoItem from "./TodoItem"

export default function TodayView() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        <IoStar className="mr-2 mb-1.5 inline text-yellow-500" size="1em" />
        Heute
      </h1>
      <ul className="flex flex-col gap-2 px-1 py-6">
        <TodoItem value="Wäsche aufhängen" isChecked={true} todoId="check-1" />
        <TodoItem value="Programmieren" isChecked={false} todoId="check-2" />
      </ul>
    </>
  )
}
