import { CSSProperties, ReactNode, useRef } from 'react'
import { Colors, Widths } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Drawer.css'

type Navbar = {
  top?: boolean
  side?: boolean
}

type List = {
  link?: string
  label?: string
  icon?: ReactNode | string
}

export interface DrawerProps {
  label?: string
  mobile?: boolean
  right?: boolean
  navbar?: Navbar
  list?: List[]
  children?: ReactNode
  bgColor?: Colors
  sideWidth?: Widths
  contentStyle?: CSSProperties
  sideStyle?: CSSProperties
}

const Drawer = (props: DrawerProps) => {
  const classes = ReplaceSpaces(
    `menu p-4 overflow-y-auto ${
      props.sideWidth ? `w-${props.sideWidth}` : 'w-80'
    } ${
      props.bgColor
        ? `bg-${props.bgColor} text-${props.bgColor}-content`
        : 'bg-base-100 text-base-content'
    }`
  )

  const List = props.list ? (
    props.list.map((item) => (
      <li>
        <a href={item.link}>
          {item.icon}
          {item.label}
        </a>
      </li>
    ))
  ) : (
    <li>Sidebar Item 1</li>
  )

  const reference = useRef(0)
  return (
    <div className={`drawer${props.right ? ' drawer-end' : ''}`}>
      <input
        id={reference.toString()}
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content' style={props.contentStyle}>
        <label
          htmlFor={reference.toString()}
          className='btn btn-primary drawer-button'
        >
          {props.label}
        </label>
        {props.children}
      </div>
      <div className='drawer-side' style={props.sideStyle}>
        <label
          htmlFor={reference.toString()}
          className='drawer-overlay'
        ></label>
        <ul className={classes}>{List}</ul>
      </div>
    </div>
  )
}

export default Drawer
