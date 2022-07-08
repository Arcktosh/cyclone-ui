import { ReplaceSpaces } from "../../scripts"
import { Colors, Sizes } from "../../static"
import "./Checkbox.css"

export interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  color?: Colors
  size?: Sizes
  disabled?: boolean
}

const Checkbox = (props: CheckboxProps) => {
  const color = props.color ? `checkbox-${props.color}` : ""
  const size = props.size ? `checkbox-${props.size}` : ""
  const disabled = props.disabled ? "cursor-not-allowed" : "cursor-pointer"
  const checkClasses = ReplaceSpaces(`checkbox ${color} ${size} ${disabled}`)

  return (
    <div className="form-control">
      {props.label ? (
        <label className={`label ${disabled}`}>
          <span className="label-text">{props.label}</span>
          <input
            type="checkbox"
            checked={props.checked}
            className={checkClasses}
            onChange={props.onChange}
            disabled={props.disabled}
          />
        </label>
      ) : (
        <input
          type="checkbox"
          checked={props.checked}
          className={checkClasses}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      )}
    </div>
  )
}

export default Checkbox
