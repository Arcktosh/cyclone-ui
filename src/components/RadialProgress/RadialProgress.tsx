import { ReplaceSpaces } from "../../scripts"
import { Colors, Widths } from "../../static"
import "./RadialProgress.css"

export interface RadialProgressProps {
  border?: Widths
  color?: Colors
  bgColor?: Colors
  value?: number
  max?: number
  label?: string
  size?: string
  thickness?: string
}

const RadialProgress = (props: RadialProgressProps) => {
  const max = props.max ? props.max : 100
  const value = props.value ? props.value : Math.floor(Math.random() * 100 + 1)
  const percentage = (value / max) * 100
  let textColor =
    props.bgColor || props.color
      ? `text-${props.bgColor || props.color}-content`
      : ""

  const counter = {
    "--value": percentage,
    "--size": props.size,
    "--thickness": props.thickness,
  } as React.CSSProperties

  const classes = ReplaceSpaces(
    `radial-progress ${
      props.bgColor ? `bg-${props.bgColor}` : ""
    } ${textColor} ${
      props.border
        ? `border-${props.border} border-${props.bgColor || props.color}`
        : ""
    }`
  )

  return (
    <div className={classes} style={counter}>
      {props.label ? props.label : `${percentage.toFixed(1)} %`}
    </div>
  )
}

export default RadialProgress
