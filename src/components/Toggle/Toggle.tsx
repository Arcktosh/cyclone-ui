import { useEffect, useState } from 'react'
import { Colors, Sizes } from '../../static'
import './Toggle.css'

export interface ToggleProps {
    color?: Colors
    size?: Sizes
    checked?: boolean
    disabled?: boolean
    onChange?: (a: boolean) => void
    label?: string
}

const Toggle = (props: ToggleProps) => {
    const [val, setVal] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        setVal(props.checked)
    }, [props.checked])

    const SetValue = (value: boolean) => {
        setVal(value)
        props.onChange ? props.onChange(value) : <></>
    }
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                {props.label ? <span className="label-text">{props.label}</span> : <></>}
                <input type="checkbox" className="toggle" disabled={props.disabled} checked={val} onChange={(e) => SetValue(e.target.checked)} />
            </label>
        </div>
    )
}

export default Toggle
