import { CSSProperties } from 'react'
import { backgrounds, Colors, Widths } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Carousel.css'

type Image = {
    url?: string
    alt?: string
}

type Snaps = {
    start?: boolean
    center?: boolean
    end?: boolean
    fullWidth?: boolean
    halfWidth?: boolean
    fullBlead?: boolean
}

type Indicators = {
    numbers?: boolean
    arrows?: boolean
}

export interface CarouselProps {
    snapTo?: Snaps
    width?: Widths
    height?: Widths
    images?: Image[]
    vertical?: boolean
    bgColor?: Colors
    indicators?: Indicators
    style?: CSSProperties
}
const Carousel = (props: CarouselProps) => {
    const width = props.width ? `w-${props.width}` : ''
    const height = props.height ? `h-${props.height}` : ''
    const vertical = props.vertical ? 'carousel-vertical' : ''
    const halfWidth = props.snapTo?.halfWidth ? 'w-1/2' : ''
    const fullBlead = props.snapTo?.fullBlead ? 'carousel-center max-w-md p-4 space-x-4' : ''
    const background = props.bgColor ? backgrounds(props.bgColor) : 'bg-neutral'

    const classes = ReplaceSpaces(
        `carousel ${height} ${width} ${props.snapTo?.center ? 'carousel-center' : ''} ${props.snapTo?.end ? 'carousel-end' : ''} ${vertical} ${fullBlead} ${background} rounded-box`
    )
    const itemClasses = ReplaceSpaces(`carousel-item ${props.snapTo?.fullWidth ? 'w-full' : ''} ${props.vertical ? 'h-full' : ''} ${halfWidth} ${props.indicators?.arrows ? 'relative w-full' : ''}`)
    const imageClasses = ReplaceSpaces(`${props.snapTo?.fullBlead ? 'rounded-box' : ''} ${props.snapTo?.halfWidth ? 'w-full' : ''} ${props.indicators?.arrows ? 'w-full' : ''}`)
    return (
        <>
            <div className={classes} style={props.style}>
                {props.images?.map((image, index) => (
                    <div id={`item${index + 1}`} className={itemClasses} key={image.url || image.alt || 'Image' + index}>
                        <img src={image.url} alt={image.alt ? image.alt : 'Image'} className={imageClasses} />
                        {props.indicators?.arrows ? (
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#item${index}`} className="btn btn-circle">
                                    ❮
                                </a>
                                <a href={`#item${index + 2}`} className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
            </div>
            {props.indicators?.numbers ? (
                <div className="flex justify-center w-full py-2 gap-2">
                    {props.images?.map((image, index) => (
                        <a href={`#item${index + 1}`} className="btn btn-xs" key={index + 1}>
                            {index + 1}
                        </a>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Carousel
