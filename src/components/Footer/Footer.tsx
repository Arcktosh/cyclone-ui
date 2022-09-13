import { CSSProperties, ReactNode } from 'react'
import { Colors } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Footer.css'

type Column = {
  title?: string
  content?: ReactNode
}

type Logo = {
  title?: string | ReactNode
  icon?: ReactNode
}

export interface FooterProps {
  logo?: Logo
  colData?: Column[]
  bgColor?: Colors
  centered?: boolean
  classes?: string
  style?: CSSProperties
}

const Footer = (props: FooterProps) => {
  const title = props.logo ? (
    <div>
      {props.logo?.icon}
      {props.logo?.title}
    </div>
  ) : (
    <></>
  )

  const columnData = props.colData?.map((item, i) => (
    <div key={item.title || 'Footer' + i}>
      {item.title ? <span className='footer-title'>{item.title}</span> : <></>}
      {item.content}
    </div>
  ))

  const classes = ReplaceSpaces(
    `footer p-10 ${
      props.bgColor
        ? `bg-${props.bgColor} text-${props.bgColor}-content`
        : `bg-neutral text-neutral-content`
    } ${props.centered ? 'footer-center' : ''} ${props.classes}`
  )
  return (
    <footer className={classes} style={props.style}>
      {title}
      {columnData}
    </footer>
  )
}

export default Footer
