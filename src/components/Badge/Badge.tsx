import { CSSProperties } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Sizes } from '../../static'

export interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    outline?: boolean
    size?: Sizes
    color?: Colors
}

export const Badge = (props: BadgeProps) => {
    const { children, color, outline, size, style } = props
    const bcolor = color ? `badge-${props.color}` : ''
    const boutline = outline ? 'badge-outline' : ''
    const bsize = size ? `badge-${props.size}` : ''
    const _style: CSSProperties = style || {}

    const classes = ReplaceSpaces(`badge ${bsize} ${bcolor} ${boutline}`)

    return (
        <span className={classes} style={_style} {...props}>
            {children}
        </span>
    )
}
