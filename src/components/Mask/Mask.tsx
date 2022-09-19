import { Shapes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

import { CSSProperties } from 'react'

export interface MaskProps {
    shape?: Shapes
    url?: string
    alt?: string
    classes?: string
    style?: CSSProperties
}

const Mask = (props: MaskProps) => {
    const maskClass = props.shape ? `mask mask-${props.shape}` : ''
    const classes = ReplaceSpaces(`${maskClass} ${props.classes}`)
    return <img style={props.style} className={classes} src={props.url} alt={props.alt ? props.alt : 'Image'} />
}

export Mask
