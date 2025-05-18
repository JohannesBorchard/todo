import { FaInbox } from "react-icons/fa"
import { IoStar, IoCalendar, IoRadioButtonOffOutline } from "react-icons/io5"

export default function SideNav() {
  return (
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
  )
}
