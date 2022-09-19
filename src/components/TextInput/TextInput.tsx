import { useEffect, useState } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Sizes } from '../../static'
import './TextInput.css'

export interface TextInputProps {
    placeholder?: string
    label?: string
    altLabelTR?: string
    altLabelBL?: string
    altLabelBR?: string
    disabled?: boolean
    border?: boolean
    color?: Colors
    size?: Sizes
    value?: string
    onChange?: (a: string | number) => void
}

const TextInput = (props: TextInputProps) => {
    const [val, setVal] = useState<any>(null)
    const classes = ReplaceSpaces(`input ${props.color ? `input-${props.color}` : ''} ${props.size ? `input-${props.size}` : ''} ${props.border ? `input-bordered` : ''} w-full max-w-xs`)
    useEffect(() => {
        setVal(props.value)
    }, [props.value])

    const SetValue = (value: string | number) => {
        setVal(value)
        props.onChange ? props.onChange(value) : <></>
    }

    return (
        <div className="form-control w-full max-w-xs">
            {props.label || props.altLabelTR ? (
                <label className="label">
                    {props.label ? <span className="label-text">{props.label}</span> : <></>}
                    {props.altLabelTR ? <span className="label-text-alt">{props.altLabelTR}</span> : <></>}
                </label>
            ) : (
                <></>
            )}
            <input type="text" placeholder={props.placeholder} className={classes} value={val} onChange={(e) => SetValue(e.target.value)} disabled={props.disabled} />
            {props.altLabelBL || props.altLabelBR ? (
                <label className="label">
                    {props.altLabelBL ? <span className="label-text-alt">{props.altLabelBL}</span> : <></>}
                    {props.altLabelBR ? <span className="label-text-alt">{props.altLabelBR}</span> : <></>}
                </label>
            ) : (
                <></>
            )}
        </div>
    )
}

export default TextInput
