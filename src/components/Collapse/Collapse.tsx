import { CSSProperties } from 'react'
import { Colors } from '../../static'
import { ReplaceSpaces } from '../../scripts'

export type Icon = {
    arrow?: boolean
    plus?: boolean
}

export type Font = {
    textSize?: string //text-xl
    font?: string //font-medium
}

export interface CollapseProps {
    icon?: Icon
    title?: string
    content?: string
    forceOpen?: boolean
    bgColor?: Colors
    focusColor?: Colors
    font?: Font
    style?: CSSProperties
    contentStyle?: CSSProperties
}

export const Collapse = (props: CollapseProps) => {
    const focusColor = props.focusColor ? `peer-checked:bg-${props.focusColor} peer-checked:text-${props.focusColor}-content` : 'collapse-focus'
    const bgColor = props.bgColor ? `border bg-${props.bgColor} text-${props.bgColor}-content rounded-box` : ''
    const icon = props.icon ? (props.icon.plus ? 'collapse-plus' : props.icon.arrow ? 'collapse-arrow' : '') : ''

    const open = props.forceOpen ? 'collapse-open' : ''

    const mainClasses = ReplaceSpaces(`collapse ${icon} ${bgColor} ${open} ${props.focusColor ? 'group' : ''} `)
    const groupClasses = ReplaceSpaces(`collapse-title ${props.font?.textSize ? props.font?.textSize : 'text-xl'} ${props.font?.font ? props.font?.font : 'font-medium'} ${focusColor}`)

    return (
        <div className={mainClasses} style={props.style}>
            <input type="checkbox" className="peer" />
            <div className={groupClasses}>{props.title}</div>
            <div className={`collapse-content ${focusColor}`} style={props.contentStyle}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

