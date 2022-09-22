import { CSSProperties, useEffect, useState } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors, Sizes } from '../../static'

export type List = {
    value?: string | number
    label?: string
}

export interface SelectProps {
    label?: string
    altLabelTR?: string
    altLabelBL?: string
    altLabelBR?: string
    defaultSelect?: string
    options?: List[]
    value?: string
    border?: boolean
    disabled?: boolean
    color?: Colors
    size?: Sizes
    onChange?: (a: string | number) => void
    classes?: string
    style?: CSSProperties
}

export const Select = (props: SelectProps) => {
    const [value, setValue] = useState<string | number>(0)

    useEffect(() => {
        if (props.value) {
            setValue(props.value)
        }
    }, [props.value])

    const SetSelect = (value: string | number) => {
        setValue(value)
        if (props.onChange) {
            props.onChange(value)
        }
    }

    const classes = ReplaceSpaces(`select ${props.border ? 'select-bordered' : ''} ${props.color ? `select-${props.color}` : ''} ${props.size ? `select-${props.size}` : ''} ${props.classes}`)

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
            <select className={classes} disabled={props.disabled} onChange={(e) => SetSelect(e.target.value)} value={value} defaultValue={value} style={props.style}>
                {props.defaultSelect ? (
                    <option disabled selected>
                        {props.defaultSelect}
                    </option>
                ) : (
                    <></>
                )}
                {props.options?.map((item, i) => (
                    <option key={item.value || 'ItemValue' + i} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
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
