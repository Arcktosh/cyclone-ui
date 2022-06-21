import "./ButtonGroup.css"
import Button from "../Button/Button"
import { ButtonProps } from "../Button/Button"

type radioList = {
  id?: number
  label?: string
  checked?: boolean
}
export interface ButtonGroupProps {
  buttons: ButtonProps[]
  list?: radioList[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ButtonGroup = (props: ButtonGroupProps) => {
  if (props.buttons) {
    return (
      <div className="btn-group">
        {props.buttons.map((button) => (
          <Button {...button} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="btn-group">
        {props.list?.map((item) => (
          <input
            type="radio"
            name="options"
            value={item.id}
            data-title={item.label}
            className="btn"
            checked={item.checked}
            onChange={props.onChange}
          />
        ))}
      </div>
    )
  }
}

export default ButtonGroup
