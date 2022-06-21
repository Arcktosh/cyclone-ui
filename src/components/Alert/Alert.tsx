import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../SvgIcons/SvgIcons"
import "./Alert.css"
export interface AlertProps {
  title?: string
  description?: string
  bgColor?: "info" | "success" | "warning" | "error"
  iconOn?: boolean
  svgIcon?: string
  children?: React.ReactNode
}
const Alert = (props: AlertProps) => {
  const bgColor = props.bgColor ? `alert alert-${props.bgColor}` : "alert"
  const svg = () => {
    if (props.iconOn) {
      if (props.svgIcon) {
        return props.svgIcon
      } else {
        switch (props.bgColor) {
          case "info":
            return <InfoIcon />
          case "success":
            return <SuccessIcon />
          case "warning":
            return <WarningIcon />
          case "error":
            return <ErrorIcon />
          default:
            return <></>
        }
      }
    } else {
      return <></>
    }
  }

  return (
    <div className={`${bgColor} shadow-lg`}>
      <div>
        {svg()}
        <span>
          <h3 className="font-bold">{props.title}</h3>
          <div className="text-xs">{props.description}</div>
        </span>
      </div>
      <div className="flex">{props?.children}</div>
    </div>
  )
}

export default Alert
