import { useEffect, useState } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Widths } from '../../static'
import './Textarea.css'

export interface TextareaProps {
    placeholder?: string
    label?: string
    altLabelTR?: string
    altLabelBL?: string
    altLabelBR?: string
    disabled?: boolean
    border?: boolean
    color?: Colors
    value?: string | number
    height?: Widths
    onChange?: (a: string | number) => void
}

const Textarea = (props: TextareaProps) => {
    const [val, setVal] = useState<string | number | undefined>(undefined)

    useEffect(() => {
        setVal(props.value)
    }, [props.value])

    const classes = ReplaceSpaces(`textarea ${props.color ? `textarea-${props.color}` : ''} ${props.height ? `h-${props.height}` : ''} ${props.border ? `textarea-bordered` : ''}`)

    const SetValue = (value: string | number) => {
        setVal(value)
        props.onChange ? props.onChange(value) : <></>
    }

    return (
        <div className="form-control">
            {props.label || props.altLabelTR ? (
                <label className="label">
                    {props.label ? <span className="label-text">{props.label}</span> : <></>}
                    {props.altLabelTR ? <span className="label-text-alt">{props.altLabelTR}</span> : <></>}
                </label>
            ) : (
                <></>
            )}
            <textarea placeholder={props.placeholder} className={classes} value={val} onChange={(e) => SetValue(e.target.value)} disabled={props.disabled} />
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

export default Textarea
