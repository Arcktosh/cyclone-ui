import { CSSProperties } from 'react'
import { ReplaceSpaces } from '../../scripts'
import './Badge.css'

type sizes = 'xs' | 'sm' | 'md' | 'lg'
type color = 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error'

export interface BadgeProps {
    label?: string
    outline?: boolean
    size?: sizes
    color?: color
    style?: CSSProperties
}

const Badge = (props: BadgeProps) => {
    const color = props.color ? `badge-${props.color}` : ''
    const outline = props.outline ? 'badge-outline' : ''
    const size = props.size ? `badge-${props.size}` : ''

    const classes = ReplaceSpaces(`badge ${size} ${color} ${outline}`)

    return (
        <span className={classes} style={props.style}>
            {props.label}
        </span>
    )
}

export default Badge
