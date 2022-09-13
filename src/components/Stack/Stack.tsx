import { CSSProperties, ReactNode } from 'react'
import { Colors, Widths } from '../../static'
import './Stack.css'

export interface StackProps {
  stack: ReactNode
  width?: Widths
  height?: Widths
  classes?: string
  style?: CSSProperties
  color?: Colors
}

const Stack = (props: StackProps) => {
  return (
    <div className='stack'>
      {props.stack.map((item, i) => (
        <div
          key={i}
          className={`grid ${props.width ? `w-${props.width}` : 'w-32'} ${
            props.height ? `h-${props.height}` : 'h-20'
          } rounded ${
            props.color
              ? `bg-${props.color} text-${props.color}-content`
              : 'bg-primary text-primary-content'
          } place-content-center ${props.classes}`}
          style={props.style}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Stack
