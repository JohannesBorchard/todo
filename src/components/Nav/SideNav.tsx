import { FaInbox } from "react-icons/fa"
import { IoStar, IoCalendar } from "react-icons/io5"
import SideNavItem from "./SideNavItem"
import SideNavProject from "./SideNavProject"
import Toggle from "../Toggle"

export default function SideNav({ toggleShowCompleted }) {
  return (
    <aside className="flex w-64 flex-col justify-between overflow-y-auto border-r border-gray-300 bg-gray-100">
      <div>
        {/* Ansichten */}
        <nav className="px-5 py-8">
          <ul className="flex flex-col gap-3 text-lg font-semibold text-gray-700">
            <SideNavItem icon={FaInbox} label="Inbox" color="blue" />
            <SideNavItem
              icon={IoStar}
              label="Heute"
              color="yellow"
              isActive={true}
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
      </div>
      <div className="px-6 py-4">
        <Toggle onClick={(val: boolean) => toggleShowCompleted(val)} />
      </div>
    </aside>
  )
}
