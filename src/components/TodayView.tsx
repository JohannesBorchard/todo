import { IoStar } from "react-icons/io5"
import TodoItem from "./TodoItem"
import AddTodoItem from "./AddTodoItem"
import { useState, useEffect } from "react"
import type { TodoType } from "../types"

export default function TodayView() {
  const [todoArr, setTodoArr] = useState<TodoType[]>(() =>
    JSON.parse(localStorage.getItem("todoArr") ?? "[]")
  )

  useEffect(() => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr))
  }, [todoArr])

  function addNewTodo(value: string): void {
    setTodoArr((prevTodoArr) => [
      ...prevTodoArr,
      { value: value, isChecked: false }
    ])
  }

  function removeTodo(indexToRemove: number) {
    setTodoArr((prev) => prev.filter((_, i) => i !== indexToRemove))
  }

  //[({ value: "Wäsche aufhängen", isChecked: true }, { value: "Programmieren", isChecked: false })]

  return (
    <>
      <h1 className="text-3xl font-bold">
        <IoStar className="mr-2 mb-1.5 inline text-yellow-500" size="1em" />
        Heute
      </h1>
      <ul className="flex flex-col gap-2 px-1 py-6">
        {todoArr.map((todoObj, index) => (
          <TodoItem
            value={todoObj.value}
            isChecked={todoObj.isChecked}
            todoId={"check-" + index}
            removeAction={() => removeTodo(index)}
          />
        ))}
        <AddTodoItem onClick={(value) => addNewTodo(value)} />
      </ul>
    </>
  )
}
