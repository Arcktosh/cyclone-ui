import { ReactNode } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Widths } from '../../static'
import './Menu.css'

type Item = {
  id?: number
  value?: string
  url?: string
  icon?: ReactNode
  isActive?: boolean
  bordered?: boolean
}
type MenuStructure = {
  title?: string
  items?: Item[]
  disabled?: boolean
  children?: ReactNode
}

export interface MenuProps {
  menu?: MenuStructure[]
  bgColor?: Colors
  width?: Widths
  padding?: Widths
  classes?: string
  isRounded?: boolean
  borderHover?: boolean
  compact?: boolean
  horizontal?: boolean
  onlyIcon?: boolean
}
const Menu = (props: MenuProps) => {
  const classes = ReplaceSpaces(
    `menu ${
      props.bgColor
        ? `bg-${props.bgColor} text-${props.bgColor}-content`
        : 'bg-base-100'
    } ${props.width ? `w-${props.width}` : ''} ${
      props.classes ? props.classes : ''
    } ${props.isRounded ? 'rounded-box' : ''} ${
      props.padding ? `p-${props.padding}` : ''
    } ${props.compact ? 'menu-compact' : ''} ${
      props.horizontal ? 'menu-horizontal' : ''
    }`
  )
  return (
    <ul className={classes}>
      {props.menu?.map((menu, i) => (
        <>
          {menu.title ? (
            <li className='menu-title' key={menu.title + i}>
              <span>{menu.title}</span>
            </li>
          ) : (
            <></>
          )}
          {menu.items?.map((item, i) => (
            <li key={item.id || item.url || item.value || 'Item' + i}>
              <a
                href={item.url}
                className={`${item.isActive ? 'active' : ''} ${
                  item.bordered ? 'bordered' : ''
                } ${props.borderHover ? 'hover-bordered' : ''} ${
                  menu.disabled ? 'disabled' : ''
                }`}
              >
                {item.icon}
                {props.onlyIcon ? <></> : item.value}
              </a>
            </li>
          ))}
          {menu.children}
        </>
      ))}
    </ul>
  )
}

export default Menu
