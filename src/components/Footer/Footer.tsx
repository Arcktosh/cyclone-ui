import React from "react"
import { ReplaceSpaces } from "../../scripts"
import { Colors } from "../../static"
import "./Footer.css"

type Column = {
  title?: string
  content?: React.ReactNode
}

type Logo = {
  title?: string | React.ReactNode
  icon?: React.ReactNode
}

export interface FooterProps {
  logo?: Logo
  colData?: Column[]
  bgColor?: Colors
  centered?: boolean
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
    <div key={i}>
      {item.title ? <span className="footer-title">{item.title}</span> : <></>}
      {item.content}
    </div>
  ))

  const classes = ReplaceSpaces(
    `footer p-10 ${
      props.bgColor
        ? `bg-${props.bgColor} text-${props.bgColor}-content`
        : `bg-neutral text-neutral-content`
    } ${props.centered ? "footer-center" : ""}`
  )
  return (
    <footer className={classes}>
      {title}
      {columnData}
    </footer>
  )
}

export default Footer
