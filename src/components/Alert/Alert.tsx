import { CSSProperties, ReactNode } from 'react'
import { Colors } from '../../static'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../SvgIcons'
import './Alert.css'

export interface AlertProps {
    title?: string
    description?: string
    bgColor?: Colors
    iconOn?: boolean
    svgIcon?: ReactNode
    children?: ReactNode
    titleStyle?: CSSProperties
    descriptionStyle?: CSSProperties
}

const Alert = (props: AlertProps) => {
    const bgColor = props.bgColor ? `alert alert-${props.bgColor}` : 'alert'

    const bgIcon = () => {
        switch (props.bgColor) {
            case 'info':
                return <InfoIcon />
            case 'success':
                return <SuccessIcon />
            case 'warning':
                return <WarningIcon />
            case 'error':
                return <ErrorIcon />
            default:
                return <></>
        }
    }

    const svg = props.iconOn ? props.svgIcon ? props.svgIcon : bgIcon() : <></>

    return (
        <div className={`${bgColor} shadow-lg`}>
            <div>
                {svg}
                <span>
                    <h3 className="font-bold" style={props?.titleStyle}>
                        {props.title}
                    </h3>
                    <div className="text-xs" style={props?.descriptionStyle}>
                        {props.description}
                    </div>
                </span>
            </div>
            <div className="flex">{props?.children}</div>
        </div>
    )
}

export default Alert
