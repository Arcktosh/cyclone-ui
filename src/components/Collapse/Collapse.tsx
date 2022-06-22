import { ReplaceSpaces } from "../../scripts"
import { Colors } from "../../static"
import "./Collapse.css"

type Icon = {
  arrow?: boolean
  plus?: boolean
}

type Font = {
  textSize?: string //text-xl
  font?: string //font-medium
}

export interface CollapseProps {
  icon?: Icon
  title?: string
  content?: string
  forceOpen?: boolean
  bgColor?: Colors
  focusColor?: Colors
  font?: Font
}

const Collapse = (props: CollapseProps) => {
  const focusColor = props.focusColor
    ? `group-focus:bg-secondary group-focus:text-secondary-content collapse-focus-${props.focusColor}`
    : "collapse-focus"
  const bgColor = props.bgColor ? `border bg-${props.bgColor} rounded-box` : ""
  const icon = props.icon
    ? props.icon.plus
      ? "collapse-plus"
      : props.icon.arrow
      ? "collapse-arrow"
      : ""
    : ""

  const open = props.forceOpen ? "collapse-open" : ""

  const mainClasses = ReplaceSpaces(
    `collapse ${icon} ${bgColor} ${open} ${props.focusColor ? "group" : ""}`
  )
  const groupClasses = ReplaceSpaces(
    `collapse-title ${
      props.font?.textSize ? props.font?.textSize : "text-xl"
    } ${props.font?.font ? props.font?.font : "font-medium"} ${focusColor}`
  )

  return (
    <div tabIndex={0} className={mainClasses}>
      <div className={groupClasses}>{props.title}</div>
      <div className={`collapse-content ${focusColor}`}>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Collapse
