import { CSSProperties } from 'react'
import { ReplaceSpaces } from '../../scripts'

export interface DividerProps {
    isHorizontal?: boolean
    text?: string
    responsive?: boolean
    style?: CSSProperties
}

const Divider = (props: DividerProps) => {
    const classes = ReplaceSpaces(`divider ${props.isHorizontal ? 'divider-horizontal' : ''} ${props.responsive ? 'lg:divider-horizontal' : ''}`)

    return (
        <div className={classes} style={props.style}>
            {props.text}
        </div>
    )
}

export Divider
