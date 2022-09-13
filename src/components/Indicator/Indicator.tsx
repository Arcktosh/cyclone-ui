import { CSSProperties, ReactNode } from 'react'
import { Colors } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Indicator.css'

type Position = {
  top?: boolean
  middle?: boolean
  bottom?: boolean
  start?: boolean
  center?: boolean
  end?: boolean
}

export interface IndicatorProps {
  title?: string
  bgColor?: Colors
  children?: ReactNode
  position?: Position
  responsive?: boolean
  classes?: string
  style?: CSSProperties
}

const Indicator = (props: IndicatorProps) => {
  const position = () => {
    let positions = ''
    if (props.responsive) {
      return 'sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end'
    }
    if (props.position?.top) {
      positions = positions + ' indicator-top'
    }
    if (props.position?.middle) {
      positions = positions + ' indicator-middle'
    }
    if (props.position?.bottom) {
      positions = positions + ' indicator-bottom'
    }
    if (props.position?.start) {
      positions = positions + ' indicator-start'
    }
    if (props.position?.center) {
      positions = positions + ' indicator-center'
    }
    if (props.position?.end) {
      positions = positions + ' indicator-end'
    }
    return positions
  }
  const classes = ReplaceSpaces(
    `indicator-item ${position()} badge ${
      props.bgColor ? `badge-${props.bgColor}` : ''
    } ${props.classes}`
  )
  return (
    <div className='indicator' style={props.style}>
      <span className={classes}>{props.title}</span>
      {props.children}
    </div>
  )
}

export default Indicator
