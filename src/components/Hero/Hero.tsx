import React from "react"
import { ReplaceSpaces } from "../../scripts"
import { Colors, Sizes } from "../../static"
import "./Hero.css"

type Title = {
  title?: string
  fontSize?: Sizes
}
export interface HeroProps {
  title?: Title
  image?: React.ReactNode
  bgColor?: Colors
  centered?: boolean
  reversed?: boolean
  content?: React.ReactNode
  overlayBackground?: string
}
const Hero = (props: HeroProps) => {
  const classes = ReplaceSpaces(
    `hero min-h-screen ${props.bgColor ? `bg-${props.bgColor}` : "bg-base-200"}`
  )
  const contentClasses = ReplaceSpaces(
    `hero-content ${
      props.reversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
    } ${props.centered ? "text-center" : ""}`
  )
  const titleClass = ReplaceSpaces(
    `${
      props.title?.fontSize ? `text-${props.title.fontSize}` : "text-5xl"
    } font-bold`
  )
  const styled = {
    backgroundImage: `url(${props.overlayBackground})`,
  } as React.CSSProperties

  return (
    <div className={classes} style={styled}>
      <div className={contentClasses}>
        {props.image ? props.image : <></>}
        <div className="max-w-md">
          {props.title ? (
            <h1 className={titleClass}>{props.title?.title}</h1>
          ) : (
            <></>
          )}
          {props.content}
        </div>
      </div>
    </div>
  )
}

export default Hero
