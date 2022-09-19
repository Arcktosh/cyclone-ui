import { CSSProperties, ReactNode } from 'react'
import { Colors } from '../../static'

export interface NavbarProps {
    start?: ReactNode
    center?: ReactNode
    end?: ReactNode
    navColor?: Colors
    children?: ReactNode
    classes?: string
    style?: CSSProperties
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className={`navbar ${props.navColor ? `bg-${props.navColor} text-${props.navColor}-content` : 'bg-base-100'} ${props.classes}`} style={props.style}>
            {props.start ? <div className="navbar-start">{props.start}</div> : <></>}
            {props.center ? <div className="navbar-center">{props.center}</div> : <></>}
            {props.end ? <div className="navbar-end">{props.end}</div> : <></>}
            {props.children}
        </div>
    )
}

export Navbar
