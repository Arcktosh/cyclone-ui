import { ReplaceSpaces } from "../../scripts"
import { Sizes } from "../../static"
import "./Kbd.css"

export interface KbdProps {
  size?: Sizes
  text?: string
  classes?: string
}
const Kbd = (props: KbdProps) => {
  const classes = ReplaceSpaces(
    `kbd ${props.size ? `kbd-${props.size}` : ""} ${props.classes}`
  )

  return <kbd className={classes}>{props.text}</kbd>
}

export default Kbd
