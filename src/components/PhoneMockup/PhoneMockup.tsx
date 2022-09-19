import { CSSProperties } from 'react'
import { Colors } from '../../static'

export interface PhoneMockupProps {
    children?: any
    bannerBgColor?: Colors
    contentBgColor?: Colors
    style?: CSSProperties
    classes?: string
}

export interface PhoneMockupProps {}
const PhoneMockup = (props: PhoneMockupProps) => {
    const bgColor = props.bannerBgColor ? `bg-${props.bannerBgColor} text-${props.bannerBgColor}-content` : ''
    const contentBgColor = props.contentBgColor ? `artboard artboard-demo phone-1 bg-${props.contentBgColor} text-${props.contentBgColor}-content` : 'artboard artboard-demo phone-1'

    return (
        <div className={`mockup-phone ${bgColor} ${props.classes}`} style={props.style}>
            <div className="camera"></div>
            <div className="display">
                <div className={contentBgColor}>{props.children}</div>
            </div>
        </div>
    )
}

export PhoneMockup
