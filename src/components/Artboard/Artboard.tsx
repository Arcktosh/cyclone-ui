import { CSSProperties, ReactNode } from 'react'
import { ReplaceSpaces } from '../../scripts'

export interface ArtboardProps {
    label?: string
    horizontal?: boolean
    size?: 'phone-1' | 'phone-2' | 'phone-3' | 'phone-4' | 'phone-5' | 'phone-6'
    children?: ReactNode
    style?: CSSProperties
}

export const Artboard = (props: ArtboardProps) => {
    const horizontal = props.horizontal ? 'artboard-horizontal' : ''
    const classes = ReplaceSpaces(`artboard artboard-demo ${horizontal} ${props.size}`)

    return (
        <div className={classes} style={props.style}>
            {props.label}
            {props.children}
        </div>
    )
}
