export default function SideNavItem({
  icon: Icon,
  label = "Side Nav Item",
  color = "blue",
  active = false
}) {
  return (
    <li className={`px-3 ${active && "rounded-md bg-gray-200"}`}>
      <Icon className={`mr-1.5 mb-1 inline text-${color}-500`} size="1.2em" />
      {label}
    </li>
  )
}
