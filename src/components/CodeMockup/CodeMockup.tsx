import { CSSProperties } from 'react'
import { Colors } from '../../static'

export type Code = {
    prefix?: string
    code?: string
    class?: string
}

export interface CodeMockupProps {
    code?: Code[]
    bgColor?: Colors
    style?: CSSProperties
}

export const CodeMockup = (props: CodeMockupProps) => {
    const bgColor = props.bgColor ? `bg-${props.bgColor} text-${props.bgColor}-content` : ''

    return (
        <div className={`mockup-code ${bgColor}`} style={props.style}>
            {props.code ? (
                props.code.map((item) => (
                    <pre data-prefix={item.prefix} className={item.class}>
                        <code>{item.code}</code>
                    </pre>
                ))
            ) : (
                <></>
            )}
        </div>
    )
}

