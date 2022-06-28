import { ReplaceSpaces } from "../../scripts"
import "./Divider.css"
export interface DividerProps {
  isHorizontal?: boolean
  text?: string
  responsive?: boolean
}
const Divider = (props: DividerProps) => {
  const classes = ReplaceSpaces(
    `divider ${props.isHorizontal ? "divider-horizontal" : ""} ${
      props.responsive ? "lg:divider-horizontal" : ""
    }`
  )

  return <div className={classes}>{props.text}</div>
}

export default Divider
