import { IoRadioButtonOffOutline, IoCheckmarkCircle } from "react-icons/io5"

interface SideNavProjectProps {
  label?: string
  finished?: boolean
}

export default function SideNavProject({
  label = "Side Nav Project",
  finished = false
}: SideNavProjectProps) {
  const [Icon, colorClass] = finished
    ? [IoCheckmarkCircle, "400"]
    : [IoRadioButtonOffOutline, "300"]
  return (
    <li className="px-3">
      <Icon
        className={`mr-1.5 mb-1 inline text-gray-${colorClass}`}
        size="1.2em"
      />
      {label}
    </li>
  )
}
