import { CSSProperties, ReactNode } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Widths } from '../../static'
import './Dropdown.css'

type List = {
    id: number
    value: string | number
    href?: string
}

type Direction = 'left' | 'right' | 'top' | 'end'

export interface DropdownProps {
    label?: string
    list?: List[]
    dropdown?: Direction
    align?: Direction
    width?: Widths
    bgColor?: Colors
    isHover?: boolean
    forceOpen?: boolean
    children?: ReactNode
    dropdownClasses?: string
    listClasses?: string
    listStyle?: CSSProperties
    dropdownStyle?: CSSProperties
}

const Dropdown = (props: DropdownProps) => {
    const list = props.list ? (
        props.list.map((item) => <li>{item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}</li>)
    ) : (
        <>
            <li>
                <span>Item 1</span>
            </li>
            <li>
                <span>Item 2</span>
            </li>
        </>
    )

    const listClasses = ReplaceSpaces(
        `dropdown-content ${props.children ? '' : 'menu p-2 shadow'} ${props.bgColor ? `bg-${props.bgColor} text-${props.bgColor}-content` : 'bg-base-100 text-base-content'} rounded-box ${
            props.width ? `w-${props.width}` : 'w-52'
        } ${props.listClasses}`
    )
    const dropdownClasses = ReplaceSpaces(
        `dropdown ${props.dropdown ? `dropdown-${props.dropdown}` : ''} ${props.align ? `dropdown-${props.dropdown}` : ''} ${props.isHover ? 'dropdown-hover' : ''} ${
            props.forceOpen ? 'dropdown-open' : ''
        } ${props.dropdownClasses}`
    )

    return (
        <div className={dropdownClasses} style={props.dropdownStyle}>
            <label tabIndex={0} className="btn m-1">
                {props.label ? props.label : 'Dropdown'}
            </label>
            <ul tabIndex={0} className={listClasses} style={props.listStyle}>
                {props.children ? props.children : list}
            </ul>
        </div>
    )
}

export default Dropdown
