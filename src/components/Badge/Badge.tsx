import "./Badge.css"
import ReplaceSpaces from "../../scripts/replaceSpaces"

type sizes = "xs" | "sm" | "md" | "lg"
type color =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "error"

export interface BadgeProps {
  label?: string
  outline?: boolean
  size?: sizes
  color?: color
}
const Badge = (props: BadgeProps) => {
  const color = props.color ? `badge-${props.color}` : ""
  const outline = props.outline ? "badge-outline" : ""
  const size = props.size ? `badge-${props.size}` : ""
  const classes = ReplaceSpaces(`badge ${size} ${color} ${outline}`)

  return <span className={classes}>{props.label}</span>
}

export default Badge
