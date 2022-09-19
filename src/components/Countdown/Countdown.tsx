import { CSSProperties } from 'react'
import { Colors, Sizes } from '../../static'
import { ConvertDateToDaysHoursMinSec, ReplaceSpaces, UseCountdown } from '../../scripts'
import './Countdown.css'

type Label = {
    days: string
    hours: string
    min: string
    sec: string
}

export interface CountdownProps {
    date?: Date
    isColon?: boolean
    boxed?: boolean
    labelUnder?: boolean
    textSize?: Sizes
    bgColor?: Colors
    style?: CSSProperties
    labels?: Label
}
//TODO: Simplify this render
const Countdown = (props: CountdownProps) => {
    const countDownToTime = props.date ? UseCountdown(props.date) : 0
    const [days, hours, minutes, seconds] = ConvertDateToDaysHoursMinSec(countDownToTime)

    const classes = ReplaceSpaces(`countdown font-mono ${props.textSize ? `text-${props.textSize}` : 'text-4xl'}`)
    const boxedClasses = ReplaceSpaces(`flex flex-col p-2 rounded-box text-neutral-content ${props.bgColor ? `bg-${props.bgColor} text-${props.bgColor}-content` : 'bg-neutral text-neutral-content'}`)

    const countdown = (value?: number, label?: string) => {
        const counter = { '--value': value } as React.CSSProperties
        return (
            <>
                <span className={classes}>
                    <span style={counter}></span>
                </span>
                {props.labelUnder ? label : <></>}
            </>
        )
    }
    const colon = (value?: number, label?: string) => {
        const counter = { '--value': value } as React.CSSProperties
        return (
            <>
                <span style={counter}></span>
                {props.labelUnder ? label : <></>}
            </>
        )
    }

    return props.isColon ? (
        <>
            <span className={classes}>
                {days ? <>{colon(days)}:</> : <></>}
                {colon(hours)}:{colon(minutes)}:{colon(seconds)}
            </span>
        </>
    ) : props.labelUnder ? (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            {days ? <div className="flex flex-col">{countdown(days, props.labels?.days ? props.labels.days : 'Days')}</div> : <></>}
            <div className="flex flex-col">{countdown(hours, props.labels?.hours ? props.labels.hours : 'Hours')}</div>
            <div className="flex flex-col">{countdown(minutes, props.labels?.min ? props.labels.min : 'Min')}</div>
            <div className="flex flex-col">{countdown(seconds, props.labels?.sec ? props.labels.sec : 'Sec')}</div>
        </div>
    ) : props.boxed ? (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            {days ? (
                <div className={boxedClasses}>
                    <span className={classes}>{colon(days)}</span>
                    {props.labelUnder ? props.labels?.days ? props.labels.days : 'Days' : <></>}
                </div>
            ) : (
                <></>
            )}
            <div className={boxedClasses}>
                <span className={classes}>{colon(hours)}</span>
                {props.labelUnder ? props.labels?.hours ? props.labels.hours : 'Hours' : <></>}
            </div>
            <div className={boxedClasses}>
                <span className={classes}>{colon(minutes)}</span>
                {props.labelUnder ? props.labels?.min ? props.labels.min : 'Min' : <></>}
            </div>
            <div className={boxedClasses}>
                <span className={classes}>{colon(seconds)}</span>
                {props.labelUnder ? props.labels?.sec ? props.labels.sec : 'Sec' : <></>}
            </div>
        </div>
    ) : (
        <div className="flex gap-5">
            {days ? (
                <div>
                    <span className={classes}>{colon(days)}</span>
                    {props.labelUnder ? props.labels?.days ? props.labels.days : 'Days' : <></>}
                </div>
            ) : (
                <></>
            )}
            <div>
                <span className={classes}>{colon(hours)}</span>
                {props.labelUnder ? props.labels?.hours ? props.labels.hours : 'Hours' : <></>}
            </div>
            <div>
                <span className={classes}>{colon(minutes)}</span>
                {props.labelUnder ? props.labels?.min ? props.labels.min : 'Min' : <></>}
            </div>
            <div>
                <span className={classes}>{colon(seconds)}</span>
                {props.labelUnder ? props.labels?.sec ? props.labels.sec : 'Sec' : <></>}
            </div>
        </div>
    )
}

export default Countdown
