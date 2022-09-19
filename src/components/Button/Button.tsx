import { CSSProperties, MouseEventHandler } from 'react'
import { Colors, ResponsiveSizes, Shapes, Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Button.css'

export interface ButtonProps {
    label?: string
    bgColor?: Colors
    shape?: Shapes
    isOutlined?: boolean
    isLoading?: boolean
    disabledAnimation?: boolean
    isActive?: boolean
    isDisabled?: boolean
    isGlass?: boolean
    isWide?: boolean
    width?: number
    size?: Sizes
    utilClass?: string
    iconStart?: string //SVG
    iconEnd?: string //SVG
    tabIndex?: number
    onClick?: MouseEventHandler<HTMLButtonElement>
    style?: CSSProperties
}
const Button = (props: ButtonProps) => {
    const bgColor = props.bgColor ? `btn-${props.bgColor}` : ''
    const shape = props.shape ? `btn-${props.shape}` : ''
    const utilClass = props.utilClass ? `${props.utilClass}` : ''
    const isLoading = props.isLoading ? 'loading' : ''
    const isActive = props.isActive ? 'btn-active' : ''
    const isDisabled = props.isDisabled ? 'btn-disabled' : ''
    const disabledAnimation = props.disabledAnimation ? 'no-animation' : ''
    const isOutlined = props.isOutlined ? 'btn-outline' : ''
    const isGlass = props.isGlass ? 'glass' : ''
    const isWide = props.isWide ? 'btn-wide' : ''
    const width = props.width ? `w-${props.width}` : ''
    const size = props.size ? `btn-${props.size}` : ''
    const btnSize = props.width ? width : props.size ? size : ''
    const responsive = props.size ? ResponsiveSizes(props.size) : ''

    const classes = ReplaceSpaces(
        `btn ${disabledAnimation} ${
            props.iconStart || props.iconEnd ? 'gap-2' : ''
        } ${shape} ${isLoading} ${isActive} ${isOutlined} ${isGlass} ${isWide} ${bgColor} ${isDisabled} ${btnSize} ${utilClass} ${responsive}`
    )

    return (
        <button className={classes} onClick={props.onClick} tabIndex={props.tabIndex ? props.tabIndex : 0} style={props.style}>
            {props.iconStart}
            {props.label ? props.label : 'X'}
            {props.iconEnd}
        </button>
    )
}

export default Button
