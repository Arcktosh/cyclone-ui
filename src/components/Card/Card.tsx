import "./Card.css"
import Button, { ButtonProps } from "../Button/Button"
import { ReplaceSpaces } from "../../scripts"
import Badge, { BadgeProps } from "../Badge/Badge"
import { backgrounds, Colors, PaddingClasses, Paddings } from "../../static"

type Image = {
  url?: string
  alt?: string
  padding?: Paddings //padding for the image
  overlay?: boolean
}
type Direction = {
  buttonTop?: boolean // Display Button at top of card
  imageSide?: boolean // Display Image on side of card
  imageBottom?: boolean // Display Image at bottom of card
}

export interface CardProps {
  compactMode?: boolean // Less Padding for `card-body`
  img?: Image
  title?: string
  subtitle?: string
  buttons?: ButtonProps[] // Add a Button to the Card
  directions?: Direction // Display settings for Button and Image on card
  badge?: BadgeProps // Add a Badge
  center?: boolean // Center the Card content
  bgColor?: Colors // Set the Card color
  isGlass?: boolean // Set the Card to be glass
}

const Card = (props: CardProps) => {
  const background = props.bgColor ? backgrounds(props.bgColor) : "bg-base-100"

  const classes = ReplaceSpaces(
    `card ${props.compactMode ? "card-compact" : ""} ${background} shadow-xl ${
      props.img?.overlay ? "image-full" : ""
    } ${props.isGlass ? "glass" : ""} ${
      props.directions?.imageSide ? "lg:card-side" : ""
    }`
  )
  const bodyClasses = ReplaceSpaces(
    `card-body ${props.center ? "items-center text-center" : ""}`
  )

  const paddings = props.img?.padding ? PaddingClasses(props.img?.padding) : ""

  const image = () => {
    if (props.img) {
      return (
        <figure className={paddings}>
          <img
            src={props.img?.url}
            alt={props.img?.alt ? props.img?.alt : "Image"}
            className={props.img?.padding ? "rounded-xl" : ""}
          />
        </figure>
      )
    }
  }

  const buttons = () => {
    if (props.buttons) {
      return (
        <div className="card-actions justify-end">
          {props.buttons.map((button, index) => (
            <Button {...button} key={index} />
          ))}
        </div>
      )
    } else {
      return <></>
    }
  }

  return (
    <div className={classes}>
      {!props.directions?.imageBottom ? image() : <></>}
      <div className={bodyClasses}>
        {props.directions?.buttonTop ? buttons() : <></>}
        <h2 className="card-title">
          {props.title}
          {props.badge ? <Badge {...props.badge} /> : <></>}
        </h2>
        <p>{props.subtitle}</p>
        {!props.directions?.buttonTop ? buttons() : <></>}
      </div>
      {props.directions?.imageBottom ? image() : <></>}
    </div>
  )
}

export default Card
