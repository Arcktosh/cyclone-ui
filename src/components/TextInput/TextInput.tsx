import "./TextInput.css"
export interface TextInputProps {
  label?: string
  bgColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "accent"
    | "ghost"
    | "link"
  shape?: "square" | "circle" | "block"
  isOutlined?: boolean
  isLoading?: boolean
  disabledAnimation?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isGlass?: boolean
  isWide?: boolean
  width?: number
  size?: "xs" | "sm" | "lg"
  utilClass?: string
  iconStart?: string //SVG
  iconEnd?: string //SVG
  tabIndex?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const TextInput = (props: TextInputProps) => {
  let bgColor = props.bgColor ? `btn-${props.bgColor}` : ""
  const shape = props.shape ? `btn-${props.shape}` : ""
  const utilClass = props.utilClass ? `${props.utilClass}` : ""
  const isLoading = props.isLoading ? "loading" : ""
  const isActive = props.isActive ? "btn-active" : ""
  const isDisabled = props.isDisabled ? "btn-disabled" : ""
  const disabledAnimation = props.disabledAnimation ? "no-animation" : ""
  const isOutlined = props.isOutlined ? "btn-outline" : ""
  const isGlass = props.isGlass ? "glass" : ""
  const isWide = props.isWide ? "btn-wide" : ""
  const width = props.width ? `w-${props.width}` : ""
  const size = props.size ? `btn-${props.size}` : ""
  const btnSize = props.width ? width : props.size ? size : ""
  let responsive = ""
  switch (size) {
    case "xs":
      responsive = "sm:w-1/3 md:w-1/6 lg:w-1/8 xl:w-1/10"
      break
    case "sm":
      responsive = "sm:w-1/2 md:w-1/3 lg:1/4 xl:w-1/5"
      break
    case "lg":
      responsive = "sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      break
    default:
      responsive = "sm:btn-sm md:btn-md lg:btn-lg"
      break
  }
  const classes = `${disabledAnimation} ${
    props.iconStart || props.iconEnd ? "gap-2" : ""
  } ${shape} ${isLoading} ${isActive} ${isOutlined} ${isGlass} ${isWide} ${bgColor} ${isDisabled} ${btnSize} ${utilClass} ${responsive}`.replace(
    /\s\s/g,
    " "
  )

  return (
    <button
      className={`btn ${classes}`}
      onClick={props.onClick}
      tabIndex={props.tabIndex ? props.tabIndex : 0}
    >
      {props.iconStart}
      {props.label ? props.label : "X"}
      {props.iconEnd}
    </button>
  )
}

export default TextInput
