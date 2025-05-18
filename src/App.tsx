import SideNav from "./components/Nav/SideNav"
import TodayView from "./components/TodayView"

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-50 select-none">
        <SideNav />
        <main className="flex-1 overflow-y-auto px-12 py-7 text-gray-700">
          <TodayView />
        </main>
      </div>
    </>
  )
}

export default App
