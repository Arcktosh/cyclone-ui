import { CSSProperties, ReactNode } from 'react'
import { ReplaceSpaces } from '../../scripts'

export type Link = {
    url?: string
    label?: string
    icon?: ReactNode
}

export interface BreadcrumbsProps {
    links: Link[]
    textSize?: 'sm' | 'md' | 'lg'
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
    style?: CSSProperties
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
    const textSize = props.textSize ? `text-${props.textSize}` : 'text-sm'
    const maxWidth = props.maxWidth ? `max-w-${props.maxWidth}` : 'max-w-xs'

    const classes = ReplaceSpaces(`${maxWidth} ${textSize} breadcrumbs`)

    return (
        <div className={classes} style={props.style}>
            <ul>
                {props.links.map((link, i) => (
                    <li key={link.url || link.label || '' + i}>
                        <a href={link.url}>
                            {link.icon}
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
