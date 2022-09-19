import { ChangeEvent, CSSProperties } from 'react'
import Button, { ButtonProps } from '../Button/Button'
import './ButtonGroup.css'

type radioList = {
    id?: number
    label?: string
    checked?: boolean
}

export interface ButtonGroupProps {
    buttons: ButtonProps[]
    list?: radioList[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    style?: CSSProperties
    inputStyle?: CSSProperties
}

const ButtonGroup = (props: ButtonGroupProps) => {
    if (props.buttons) {
        return (
            <div className="btn-group" style={props.style}>
                {props.buttons.map((button) => (
                    <Button {...button} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="btn-group" style={props.style}>
                {props.list?.map((item) => (
                    <input type="radio" name="options" value={item.id} data-title={item.label} className="btn" checked={item.checked} onChange={props.onChange} style={props.inputStyle} />
                ))}
            </div>
        )
    }
}

export default ButtonGroup
