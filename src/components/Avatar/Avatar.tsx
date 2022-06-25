import "./Avatar.css"
import { ReplaceSpaces } from "../../scripts"

type presence = { online?: boolean }
type shapes = "circle" | "hexagon" | "squircle" | "triangle"
type rounded = "xl" | "full"
type widths = "8" | "16" | "20" | "24" | "32"

type groupedAvatars = {
  alt?: string
  url?: string
}

type ringColor =
  | "primary"
  | "secondary"
  | "neutral"
  | "base-100"
  | "light"
  | "dark"
  | "accent"

export interface AvatarProps {
  url?: string
  alt?: string
  rounded?: rounded
  shape?: shapes
  width?: widths
  grouped?: groupedAvatars[]
  groupedLimit?: number
  presence?: presence
  bgColor?: string
  textColor?: string
  ringColor?: ringColor
}
const Avatar = (props: AvatarProps) => {
  const group = props.grouped ? props.grouped.slice(0, props.groupedLimit) : []
  const groupCounter = props.grouped ? props.grouped.length - group.length : 0
  const rounded = props.rounded ? `rounded-${props.rounded}` : "rounded"
  const ring = props.ringColor
    ? `ring ring-${props.ringColor} ring-offset-base-100 ring-offset-2`
    : ""
  const bgColor = props.bgColor
    ? `bg-${props.bgColor}-focus`
    : "bg-neutral-focus"
  const textColor = props.textColor
    ? `text-${props.textColor}-focus`
    : "text-neutral-content"
  const width = props.width ? `w-${props.width}` : "w-24"
  const presence = props.presence
    ? props.presence.online
      ? "online"
      : "offline"
    : ""

  const altKey = (name: string) => {
    return name
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), "")
  }
  const mask = () => {
    switch (props.shape) {
      case "squircle":
        return "mask mask-squircle"
      case "hexagon":
        return "mask mask-hexagon"
      case "triangle":
        return "mask mask-triangle"
      case "circle":
        return "mask mask-circle"
      default:
        return ""
    }
  }
  const hasPlaceholder = (url: string | undefined) => {
    return url ? "" : "placeholder"
  }

  const classes = ReplaceSpaces(
    `${width} ${rounded} ${mask()} ${bgColor} ${textColor} ${presence} ${ring}`
  )

  return (
    <>
      {props.grouped ? (
        <div className="avatar-group -space-x-6">
          {group.map((avatar, i) => (
            <div className={`avatar ${hasPlaceholder(avatar.url)}`} key={i}>
              <div className={classes}>
                {avatar.url ? (
                  <img
                    src={
                      avatar.url
                        ? avatar.url
                        : "https://api.lorem.space/image/face?hash=92048"
                    }
                    alt={avatar.alt ? avatar.alt : "Avatar"}
                  />
                ) : (
                  <span>{avatar.alt ? altKey(avatar.alt) : "Anon"}</span>
                )}
              </div>
            </div>
          ))}
          <div className="avatar placeholder">
            <div className={classes}>
              <span>+{groupCounter}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`avatar ${hasPlaceholder(props.url)}`}>
          <div className={`${classes}`}>
            {props.url ? (
              <img
                src={
                  props.url
                    ? props.url
                    : "https://api.lorem.space/image/face?hash=92048"
                }
                alt={props.alt ? props.alt : "Avatar"}
              />
            ) : (
              <span>{props.alt ? altKey(props.alt) : "A"}</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Avatar
