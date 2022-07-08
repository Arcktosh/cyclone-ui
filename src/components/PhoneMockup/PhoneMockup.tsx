import { Colors } from "../../static"
import "./PhoneMockup.css"

export interface PhoneMockupProps {
  children?: any
  bannerBgColor?: Colors
  contentBgColor?: Colors
}

export interface PhoneMockupProps {}
const PhoneMockup = (props: PhoneMockupProps) => {
  const bgColor = props.bannerBgColor
    ? `bg-${props.bannerBgColor} text-${props.bannerBgColor}-content`
    : ""
  const contentBgColor = props.contentBgColor
    ? `artboard artboard-demo phone-1 bg-${props.contentBgColor} text-${props.contentBgColor}-content`
    : "artboard artboard-demo phone-1"

  return (
    <div className={`mockup-phone ${bgColor}`}>
      <div className="camera"></div>
      <div className="display">
        <div className={contentBgColor}>{props.children}</div>
      </div>
    </div>
  )
}

export default PhoneMockup
