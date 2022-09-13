import { ChangeEvent, CSSProperties } from 'react'
import { Colors, Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'
import './Radio.css'

export interface RadioProps {
  label?: string
  name?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  color?: Colors
  size?: Sizes
  checkedColor?: Colors
  classes?: string
  style?: CSSProperties
}

const Radio = (props: RadioProps) => {
  const color = props.color ? `radio-${props.color}` : ''
  const size = props.size ? `radio-${props.size}` : 'radio-md'
  const disabled = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
  const radioClasses = ReplaceSpaces(
    `${color} ${size} ${disabled} ${props.classes}`
  )

  const RadioBtn = () => {
    return (
      <input
        type='radio'
        name={props.name}
        className={`radio ${radioClasses} checked:${
          props.checkedColor
            ? `bg-${props.checkedColor} text-${props.checkedColor}-content`
            : 'bg-red-500'
        }`}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
        style={props.style}
      />
    )
  }

  return props.label ? (
    <label className={`label ${disabled}`}>
      <span className='label-text'>{props.label}</span>
      <RadioBtn />
    </label>
  ) : (
    <RadioBtn />
  )
}

export default Radio
