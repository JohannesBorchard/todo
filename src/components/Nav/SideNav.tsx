import { FaInbox } from "react-icons/fa"
import { IoStar, IoCalendar } from "react-icons/io5"
import SideNavItem from "./SideNavItem"
import SideNavProject from "./SideNavProject"

export default function SideNav() {
  return (
    <aside className="w-64 overflow-y-auto border-r border-gray-300 bg-gray-100">
      {/* Ansichten */}
      <nav className="px-5 py-8">
        <ul className="flex flex-col gap-3 text-lg font-semibold text-gray-700">
          <SideNavItem icon={FaInbox} label="Inbox" color="blue" />
          <SideNavItem
            icon={IoStar}
            label="Heute"
            color="yellow"
            active={true}
          />
          <SideNavItem icon={IoCalendar} label="Geplant" color="red" />
        </ul>
      </nav>
      {/* Projekte */}
      <nav className="px-5">
        <ul className="flex flex-col gap-3 text-lg font-medium text-gray-700">
          <SideNavProject label="Privat" finished={false} />
          <SideNavProject label="Arbeit" finished={true} />
        </ul>
      </nav>
    </aside>
  )
}
