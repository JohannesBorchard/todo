import { IoStar, IoCalendar, IoRadioButtonOffOutline } from "react-icons/io5"
import { FaInbox } from "react-icons/fa"

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-50 select-none">
        <aside className="w-64 overflow-y-auto border-r border-gray-300 bg-gray-100">
          {/* Ansichten */}
          <nav className="px-5 py-8">
            <ul className="flex flex-col gap-3 text-lg font-semibold text-gray-700">
              <li className="px-3">
                <FaInbox
                  className="mr-1.5 mb-1 inline text-blue-500"
                  size="1.2em"
                />
                Inbox
              </li>
              <li className="rounded-md bg-gray-200 px-3">
                <IoStar
                  className="mr-1.5 mb-1 inline text-yellow-500"
                  size="1.2em"
                />
                Heute
              </li>
              <li className="px-3">
                <IoCalendar
                  className="mr-1.5 mb-1 inline text-red-500"
                  size="1.2em"
                />
                Geplant
              </li>
            </ul>
          </nav>
          {/* Projekte */}
          <nav className="px-5">
            <ul className="flex flex-col gap-3 text-lg font-medium text-gray-700">
              <li className="px-3">
                <IoRadioButtonOffOutline
                  className="mr-1.5 mb-1 inline text-gray-300"
                  size="1.2em"
                />
                Privat
              </li>
              <li className="px-3">
                <IoRadioButtonOffOutline
                  className="mr-1.5 mb-1 inline text-gray-300"
                  size="1.2em"
                />
                Arbeit
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto px-12 py-7 text-gray-700">
          <h1 className="text-3xl font-bold">
            <IoStar className="mr-2 mb-1.5 inline text-yellow-500" size="1em" />
            Heute
          </h1>
          <ul className="flex flex-col gap-2 px-1 py-6">
            <li>
              <div className="inline-flex items-center">
                <label
                  className="relative flex cursor-pointer items-center"
                  htmlFor="check-1"
                >
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 hover:shadow-lg"
                    id="check-1"
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
                  htmlFor="check-1"
                >
                  Wäsche aufhängen
                </label>
              </div>
            </li>
            <li>
              <div className="inline-flex items-center">
                <label
                  className="relative flex cursor-pointer items-center"
                  htmlFor="check-2"
                >
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 hover:shadow-lg"
                    id="check-2"
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
                  htmlFor="check-2"
                >
                  Programmieren
                </label>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}

export default App
