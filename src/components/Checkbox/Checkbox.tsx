import { ChangeEvent, CSSProperties } from 'react'
import { Colors, Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

export interface CheckboxProps {
    label?: string
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    color?: Colors
    size?: Sizes
    disabled?: boolean
    style?: CSSProperties
}

export const Checkbox = (props: CheckboxProps) => {
    const color = props.color ? `checkbox-${props.color}` : ''
    const size = props.size ? `checkbox-${props.size}` : ''
    const disabled = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'

    const checkClasses = ReplaceSpaces(`checkbox ${color} ${size} ${disabled}`)

    const checkboxInput = <input type="checkbox" checked={props.checked} className={checkClasses} onChange={props.onChange} disabled={props.disabled} style={props.style} />

    return (
        <div className="form-control">
            {props.label ? (
                <label className={`label ${disabled}`}>
                    <span className="label-text">{props.label}</span>
                    {checkboxInput}
                </label>
            ) : (
                checkboxInput
            )}
        </div>
    )
}
