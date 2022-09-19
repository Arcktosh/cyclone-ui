import { ReactNode } from 'react'
import { Sizes } from '../../static'
import Button, { ButtonProps } from '../Button/Button'
import './InputGroup.css'

type Label = {
    direction?: 'left' | 'right'
    text?: string
}

type Input = {
    label?: Label[]
    children?: ReactNode
    vertical?: boolean
    button?: ButtonProps
}

export interface InputGroupProps {
    groupLabel?: string
    input?: Input[]
    size?: Sizes
}

const InputGroup = (props: InputGroupProps) => {
    return (
        <div className="form-control">
            {props.groupLabel ? (
                <label className="label">
                    <span className="label-text">{props.groupLabel}</span>
                </label>
            ) : (
                <></>
            )}
            {props.input?.map((input, index) => (
                <label className={`input-group ${props.size ? `input-group-${props.size}` : ''} ${input.vertical ? 'input-group-vertical' : ''}`} key={'input-group' + index}>
                    {input.label?.map((label) => {
                        return label.direction === 'left' ? <span>{label.text}</span> : <></>
                    })}
                    {input.children}
                    {input.label?.map((label) => {
                        return label.direction === 'right' ? <span>{label.text}</span> : <></>
                    })}
                    {input.button ? <Button {...input.button} /> : <></>}
                </label>
            ))}
        </div>
    )
}

export default InputGroup
