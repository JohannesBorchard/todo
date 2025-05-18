import SideNav from "./components/Nav/SideNav"
import TodayView from "./components/TodayView"
import { ShowCompletedProvider } from "./context/ShowCompletedContext"

function App() {
  function toggleShowCompleted(val: boolean) {}
  return (
    <ShowCompletedProvider>
      <div className="flex h-screen bg-gray-50 select-none">
        <SideNav
          toggleShowCompleted={(val: boolean) => toggleShowCompleted(val)}
        />
        <main className="flex-1 overflow-y-auto px-12 py-7 text-gray-700">
          <TodayView />
        </main>
      </div>
    </ShowCompletedProvider>
  )
}

export default App
