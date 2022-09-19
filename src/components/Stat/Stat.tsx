import { ReactNode } from 'react'
import { Colors } from '../../static'

type Value = {
    label?: string
    color?: Colors
    type?: 'title' | 'value' | 'desc' | 'actions' | 'figure'
    children?: ReactNode
}

type StatItem = {
    values?: Value[]
    color?: Colors
    centered?: boolean
}
export interface StatProps {
    stats: StatItem[]
    vertical?: boolean
    responsive?: boolean
}

const Stat = (props: StatProps) => {
    return (
        <div className={`stats ${props.vertical ? 'stats-vertical' : 'stats-horizontal'} ${props.responsive ? 'lg:stats-horizontal' : ''} shadow`}>
            {props.stats ? (
                props.stats.map((StatItem) => (
                    <div className={`stat ${StatItem.centered ? 'place-items-center' : ''}`}>
                        {StatItem.values?.map((Value) => (
                            <div className={`stat-${Value.type} ${Value.color ? `text-${Value.color}` : ''}`}>{Value.label ? Value.label : Value.children ? Value.children : <></>}</div>
                        ))}
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    )
}

export Stat
