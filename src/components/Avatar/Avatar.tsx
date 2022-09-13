import { CSSProperties } from 'react'
import { Colors, Shapes, Widths } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Avatar.css'

type presence = { online?: boolean }
type rounded = 'xl' | 'full'
type groupedAvatars = {
  alt?: string
  url?: string
}

export interface AvatarProps {
  url?: string
  alt?: string
  rounded?: rounded
  shape?: Shapes
  width?: Widths
  grouped?: groupedAvatars[]
  groupedLimit?: number
  presence?: presence
  bgColor?: string
  textColor?: string
  ringColor?: Colors
  stylePlaceholder?: CSSProperties
  style?: CSSProperties
}

const Avatar = (props: AvatarProps) => {
  const defaultUrl = 'https://api.lorem.space/image/face'

  const group = props.grouped ? props.grouped.slice(0, props.groupedLimit) : []
  const groupCounter = props.grouped ? props.grouped.length - group.length : 0
  const rounded = props.rounded ? `rounded-${props.rounded}` : 'rounded'
  const ring = props.ringColor
    ? `ring ring-${props.ringColor} ring-offset-base-100 ring-offset-2`
    : ''
  const bgColor = props.bgColor
    ? `bg-${props.bgColor}-focus`
    : 'bg-neutral-focus'
  const textColor = props.textColor
    ? `text-${props.textColor}-focus`
    : 'text-neutral-content'
  const width = props.width ? `w-${props.width}` : 'w-24'
  const presence = props.presence
    ? props.presence.online
      ? 'online'
      : 'offline'
    : ''
  const mask = props.shape ? `mask mask-${props.shape}` : ''

  const classes = ReplaceSpaces(
    `${width} ${rounded} ${mask} ${bgColor} ${textColor} ${presence} ${ring}`
  )

  const altKey = (name: string) => {
    return name
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), '')
  }

  const hasPlaceholder = (url?: string) => {
    return url ? '' : 'placeholder'
  }

  return (
    <>
      {props.grouped ? (
        <div className='avatar-group -space-x-6' style={props.style}>
          {group.map((avatar, i) => (
            <div
              className={`avatar ${hasPlaceholder(avatar.url)}`}
              key={avatar.url || avatar.alt || '' + i}
            >
              <div className={classes}>
                {avatar.url ? (
                  <img
                    src={avatar.url ? avatar.url : defaultUrl}
                    alt={avatar.alt ? avatar.alt : 'Avatar'}
                  />
                ) : (
                  <span>{avatar.alt ? altKey(avatar.alt) : 'Anon'}</span>
                )}
              </div>
            </div>
          ))}
          <div className='avatar placeholder' style={props.stylePlaceholder}>
            <div className={classes}>
              <span>+{groupCounter}</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`avatar ${hasPlaceholder(props.url)}`}
          style={props.style}
        >
          <div className={`${classes}`} style={props.stylePlaceholder}>
            {props.url ? (
              <img
                src={props.url ? props.url : defaultUrl}
                alt={props.alt ? props.alt : 'Avatar'}
              />
            ) : (
              <span>{props.alt ? altKey(props.alt) : 'A'}</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Avatar
