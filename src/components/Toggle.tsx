import { useShowCompleted } from "../context/ShowCompletedContext"

export default function Toggle() {
  const { showCompleted, setShowCompleted } = useShowCompleted()
  return (
    <label className="inline-flex cursor-pointer items-center">
      <span className="relative block h-6 w-10 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-blue-500">
        <input
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
          type="checkbox"
          id="AcceptConditions"
          className="peer sr-only"
        />

        <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-4"></span>
      </span>

      <span className="ml-3 text-sm text-gray-500">Erledigte anzeigen</span>
    </label>
  )
}
