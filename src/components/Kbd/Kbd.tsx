import { CSSProperties } from 'react'
import { Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

export interface KbdProps {
    size?: Sizes
    text?: string
    classes?: string
    style?: CSSProperties
}
const Kbd = (props: KbdProps) => {
    const classes = ReplaceSpaces(`kbd ${props.size ? `kbd-${props.size}` : ''} ${props.classes}`)

    return (
        <kbd className={classes} style={props.style}>
            {props.text}
        </kbd>
    )
}

export Kbd
