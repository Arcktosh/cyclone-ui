import { CSSProperties } from 'react'
import { Colors, Widths } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './RadialProgress.css'

export interface RadialProgressProps {
    border?: Widths
    color?: Colors
    bgColor?: Colors
    value?: number
    max?: number
    label?: string
    size?: string
    thickness?: string
    classes?: string
    style?: CSSProperties
}

const RadialProgress = (props: RadialProgressProps) => {
    const max = props.max ? props.max : 100
    const value = props.value ? props.value : Math.floor(Math.random() * 100 + 1)
    const percentage = (value / max) * 100
    let textColor = props.bgColor || props.color ? `text-${props.bgColor || props.color}-content` : ''

    const counter = {
        '--value': percentage,
        '--size': props.size,
        '--thickness': props.thickness
    } as CSSProperties

    const classes = ReplaceSpaces(
        `radial-progress ${props.bgColor ? `bg-${props.bgColor}` : ''} ${textColor} ${props.border ? `border-${props.border} border-${props.bgColor || props.color}` : ''} ${props.classes}`
    )

    return (
        <div style={props.style}>
            <div className={classes} style={counter}>
                {props.label ? props.label : `${percentage.toFixed(1)} %`}
            </div>
        </div>
    )
}

export default RadialProgress
