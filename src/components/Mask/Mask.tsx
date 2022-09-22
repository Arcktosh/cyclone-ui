import { CSSProperties } from 'react'
import { Shapes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

export interface MaskProps {
    shape?: Shapes
    url?: string
    alt?: string
    classes?: string
    style?: CSSProperties
}

export const Mask = (props: MaskProps) => {
    const maskClass = props.shape ? `mask mask-${props.shape}` : ''
    const classes = ReplaceSpaces(`${maskClass} ${props.classes}`)
    return <img style={props.style} className={classes} src={props.url} alt={props.alt ? props.alt : 'Image'} />
}

