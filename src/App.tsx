import { IoStar, IoCalendar } from "react-icons/io5"
import { FaInbox } from "react-icons/fa"

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <aside className="w-64 overflow-y-auto border-r border-gray-300 bg-gray-100">
          <nav className="p-7">
            <ul className="flex flex-col gap-2 text-lg font-semibold text-gray-700">
              <li>
                <FaInbox
                  className="mr-1.5 mb-1 inline text-blue-500"
                  size="1.2em"
                />
                Inbox
              </li>
              <li>
                <IoStar
                  className="mr-1.5 mb-1 inline text-yellow-500"
                  size="1.2em"
                />
                Heute
              </li>
              <li>
                <IoCalendar
                  className="mr-1.5 mb-1 inline text-red-500"
                  size="1.2em"
                />
                Geplant
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto px-12 py-6 text-gray-700">
          <h1 className="text-3xl font-bold">
            <IoStar className="mr-2 mb-1.5 inline text-yellow-500" size="1em" />
            Heute
          </h1>
        </main>
      </div>
    </>
  )
}

export default App
