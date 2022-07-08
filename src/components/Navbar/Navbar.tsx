import React from "react"
import { Colors } from "../../static"
import "./Navbar.css"

export interface NavbarProps {
  start?: React.ReactNode
  center?: React.ReactNode
  end?: React.ReactNode
  navColor?: Colors
  children?: React.ReactNode
}
const Navbar = (props: NavbarProps) => {
  return (
    <div
      className={`navbar ${
        props.navColor
          ? `bg-${props.navColor} text-${props.navColor}-content`
          : "bg-base-100"
      }`}
    >
      {props.start ? <div className="navbar-start">{props.start}</div> : <></>}
      {props.center ? (
        <div className="navbar-center">{props.center}</div>
      ) : (
        <></>
      )}
      {props.end ? <div className="navbar-end">{props.end}</div> : <></>}
      {props.children}
    </div>
  )
}

export default Navbar
