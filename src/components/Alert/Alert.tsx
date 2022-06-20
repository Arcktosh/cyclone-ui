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
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            )
          case "success":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )
          case "warning":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            )
          case "error":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )
          default:
            return ""
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
