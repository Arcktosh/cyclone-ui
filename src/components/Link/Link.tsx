import { ReplaceSpaces } from "../../scripts"
import { Colors } from "../../static"
import "./Link.css"

export interface LinkProps {
  color?: Colors
  link?: string
  text?: string
  target?: "_blank" | "_self" | "_parent" | "_top" | "_middle" | "_bottom"
  rel?: "noopener" | "noopener noreferrer"
  hover?: boolean
  classes?: string
}

const Link = (props: LinkProps) => {
  const classes = ReplaceSpaces(
    `link ${props.color ? `link-${props.color}` : ""} ${
      props.hover ? "link-hover" : ""
    } ${props.classes}`
  )
  return (
    <a
      href={props.link}
      className={classes}
      rel={props.rel}
      target={props.target}
    >
      {props.text}
    </a>
  )
}

export default Link
