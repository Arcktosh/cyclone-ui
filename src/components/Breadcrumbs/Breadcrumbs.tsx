import "./Breadcrumbs.css"
import { ReplaceSpaces } from "../../scripts"

type link = {
  url?: string
  label?: string
  icon?: React.ReactNode
}
export interface BreadcrumbsProps {
  links: link[]
  textSize?: "sm" | "md" | "lg"
  maxWidth?: "xs" | "sm" | "md" | "lg"
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const textSize = props.textSize ? `text-${props.textSize}` : "text-sm"
  const maxWidth = props.maxWidth ? `max-w-${props.maxWidth}` : "max-w-xs"

  const classes = ReplaceSpaces(`${maxWidth} ${textSize} breadcrumbs`)

  return (
    <div className={classes}>
      <ul>
        {props.links.map((link, i) => (
          <li key={i}>
            <a href={link.url}>
              {link.icon}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
