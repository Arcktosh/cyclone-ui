import { ReplaceSpaces } from "../../scripts"
import { Colors, Sizes } from "../../static"
import "./Radio.css"

export interface RadioProps {
  label?: string
  name?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  color?: Colors
  size?: Sizes
  checkedColor?: Colors
}

const Radio = (props: RadioProps) => {
  const color = props.color ? `radio-${props.color}` : ""
  const size = props.size ? `radio-${props.size}` : "radio-md"
  const disabled = props.disabled ? "cursor-not-allowed" : "cursor-pointer"
  const radioClasses = ReplaceSpaces(`${color} ${size} ${disabled}`)

  const RadioBtn = () => {
    return (
      <input
        type="radio"
        name={props.name}
        className={`radio ${radioClasses} checked:${
          props.checkedColor
            ? `bg-${props.checkedColor} text-${props.checkedColor}-content`
            : "bg-red-500"
        }`}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    )
  }

  return props.label ? (
    <label className={`label ${disabled}`}>
      <span className="label-text">{props.label}</span>
      <RadioBtn />
    </label>
  ) : (
    <RadioBtn />
  )
}

export default Radio
