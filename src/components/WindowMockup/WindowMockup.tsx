import { Colors } from '../../static'

export interface WindowMockupProps {
    children?: any
    bannerBgColor?: Colors
    contentBgColor?: Colors
}

const WindowMockup = (props: WindowMockupProps) => {
    const bgColor = props.bannerBgColor ? `border bg-${props.bannerBgColor} text-${props.bannerBgColor}-content` : 'border border-base-300'
    return (
        <div className={`mockup-window ${bgColor}`}>
            <div className={`flex justify-center px-4 py-16 ${props.contentBgColor ? `bg-${props.contentBgColor} text-${props.contentBgColor}-content` : 'bg-base-200'}`}>{props.children}</div>
        </div>
    )
}

export WindowMockup
