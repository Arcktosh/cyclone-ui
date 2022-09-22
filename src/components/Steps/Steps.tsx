import { MouseEventHandler } from 'react'
import { ReplaceSpaces } from '../../scripts'
import { Colors } from '../../static'

export type Step = {
    title?: string
    color?: Colors
    content?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface StepsProps {
    steps?: Step[]
    color?: Colors
    vertical?: boolean
}

export const Steps = (props: StepsProps) => {
    const classes = ReplaceSpaces(`steps ${props.vertical ? 'steps-vertical' : 'lg:steps-horizontal'}`)

    return (
        <div className="overflow-x-auto">
            <ul className={classes}>
                {props?.steps ? (
                    props?.steps.map((step) => (
                        <li data-content={step?.content} className={`step ${step.color ? `step-${step.color}` : ''} ${step.onClick ? 'hover:cursor-pointer' : ''}`}>
                            <button onClick={step.onClick}>{step.title}</button>
                        </li>
                    ))
                ) : (
                    <li className="step">Step 1</li>
                )}
            </ul>
        </div>
    )
}
