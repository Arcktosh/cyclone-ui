import { ChangeEvent, CSSProperties, ReactNode } from 'react'
import { Colors, Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './RangeSlider.css'

export interface RangeSliderProps {
  color?: Colors
  size?: Sizes
  min?: number
  max?: number
  value?: number
  steps?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  children?: ReactNode
  style?: CSSProperties
  classes?: string
}

const RangeSlider = (props: RangeSliderProps) => {
  const classes = ReplaceSpaces(
    `range ${props.size ? `range-${props.size}` : ''} ${
      props.color ? `range-${props.color}` : ''
    } ${props.classes}`
  )
  return (
    <>
      <input
        type='range'
        min={props.min ? props.min : 0}
        max={props.max ? props.max : 100}
        value={props.value}
        step={props.steps}
        className={classes}
        onChange={props.onChange}
        style={props.style}
      />
      {props.children}
    </>
  )
}

export default RangeSlider
