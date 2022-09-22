import { CSSProperties, ReactNode } from 'react'
import { Colors, Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

export type Title = {
    title?: string
    fontSize?: Sizes
}

export interface HeroProps {
    title?: Title
    image?: ReactNode
    bgColor?: Colors
    centered?: boolean
    reversed?: boolean
    content?: ReactNode
    overlayBackground?: string
    style?: CSSProperties
}

export const Hero = (props: HeroProps) => {
    const classes = ReplaceSpaces(`hero min-h-screen ${props.bgColor ? `bg-${props.bgColor}` : 'bg-base-200'}`)
    const contentClasses = ReplaceSpaces(`hero-content ${props.reversed ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} ${props.centered ? 'text-center' : ''}`)
    const titleClass = ReplaceSpaces(`${props.title?.fontSize ? `text-${props.title.fontSize}` : 'text-5xl'} font-bold`)
    const styled = {
        backgroundImage: `url(${props.overlayBackground})`
    } as CSSProperties

    return (
        <div className={classes} style={styled}>
            <div className={contentClasses} style={props.style}>
                {props.image ? props.image : <></>}
                <div className="max-w-md">
                    {props.title ? <h1 className={titleClass}>{props.title?.title}</h1> : <></>}
                    {props.content}
                </div>
            </div>
        </div>
    )
}
