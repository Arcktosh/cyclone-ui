import { ReplaceSpaces } from "../../scripts"
import { Shapes } from "../../static"
import "./Mask.css"

export interface MaskProps {
  shape?: Shapes
  url?: string
  alt?: string
  classes?: string
}

const Mask = (props: MaskProps) => {
  const maskClass = props.shape ? `mask mask-${props.shape}` : ""
  const classes = ReplaceSpaces(
    `${maskClass} ${props.classes ? props.classes : ""}`
  )
  return (
    <img
      className={classes}
      src={props.url}
      alt={props.alt ? props.alt : "Image"}
    />
  )
}

export default Mask
