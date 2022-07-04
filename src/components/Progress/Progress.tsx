import { ReplaceSpaces } from "../../scripts"
import { Colors, Widths } from "../../static"
import "./Progress.css"

export interface ProgressProps {
  width?: Widths
  color?: Colors
  value?: number
  max?: number
  indeterminate?: boolean
}

const Progress = (props: ProgressProps) => {
  const max = props.max ? props.max : props.indeterminate ? undefined : 100
  const value = props.value
    ? props.value
    : props.indeterminate
    ? undefined
    : Math.floor(Math.random() * 100 + 1)
  const className = ReplaceSpaces(
    `progress ${props.color ? `progress-${props.color}` : ""} ${
      props.width ? `w-${props.width}` : "w-56"
    } `
  )
  return <progress className={className} value={value} max={max}></progress>
}

export default Progress
