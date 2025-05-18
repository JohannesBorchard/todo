import type { ComponentType } from "react"
import type { IconBaseProps } from "react-icons"
interface SideNavItemProps {
  icon: ComponentType<IconBaseProps>
  label?: string
  color?: string
  isActive?: boolean
}

export default function SideNavItem({
  icon: Icon,
  label = "Side Nav Item",
  color = "blue",
  isActive = false
}: SideNavItemProps) {
  return (
    <li className={`px-3 ${isActive && "rounded-md bg-gray-200"}`}>
      <Icon className={`mr-1.5 mb-1 inline text-${color}-500`} size="1.2em" />
      {label}
    </li>
  )
}
