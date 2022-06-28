import {
  ConvertDateToDaysHoursMinSec,
  ReplaceSpaces,
  UseCountdown,
} from "../../scripts"
import { Colors, Sizes } from "../../static"
import "./Countdown.css"

export interface CountdownProps {
  date?: Date
  isColon?: boolean
  boxed?: boolean
  labelUnder?: boolean
  textSize?: Sizes
  background?: Colors
}

const Countdown = (props: CountdownProps) => {
  const countDownToTime = props.date ? UseCountdown(props.date) : 0
  const [days, hours, minutes, seconds] =
    ConvertDateToDaysHoursMinSec(countDownToTime)
  const classes = ReplaceSpaces(
    `countdown font-mono ${
      props.textSize ? `text-${props.textSize}` : "text-4xl"
    }`
  )
  const boxedClasses = ReplaceSpaces(
    `flex flex-col p-2 rounded-box text-neutral-content ${
      props.background
        ? `bg-${props.background} text-${props.background}-content`
        : "bg-neutral text-neutral-content"
    }`
  )

  const countdown = (value?: number, label?: string) => {
    const counter = { "--value": value } as React.CSSProperties
    return (
      <>
        <span className={classes}>
          <span style={counter}></span>
        </span>
        {label}
      </>
    )
  }
  const colon = (value?: number) => {
    const counter = { "--value": value } as React.CSSProperties
    return <span style={counter}></span>
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
      {days ? (
        <div className="flex flex-col">{countdown(days, "Days")}</div>
      ) : (
        <></>
      )}
      <div className="flex flex-col">{countdown(hours, "Hours")}</div>
      <div className="flex flex-col">{countdown(minutes, "Min")}</div>
      <div className="flex flex-col">{countdown(seconds, "Sec")}</div>
    </div>
  ) : props.boxed ? (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {days ? (
        <div className={boxedClasses}>
          <span className={classes}>{colon(days)}</span>
          Days
        </div>
      ) : (
        <></>
      )}
      <div className={boxedClasses}>
        <span className={classes}>{colon(hours)}</span>
        Hours
      </div>
      <div className={boxedClasses}>
        <span className={classes}>{colon(minutes)}</span>
        Min
      </div>
      <div className={boxedClasses}>
        <span className={classes}>{colon(seconds)}</span>
        Sec
      </div>
    </div>
  ) : (
    <div className="flex gap-5">
      {days ? (
        <div>
          <span className={classes}>{colon(days)}</span>
          Days
        </div>
      ) : (
        <></>
      )}
      <div>
        <span className={classes}>{colon(hours)}</span>
        Hours
      </div>
      <div>
        <span className={classes}>{colon(minutes)}</span>
        Min
      </div>
      <div>
        <span className={classes}>{colon(seconds)}</span>
        Sec
      </div>
    </div>
  )
}

export default Countdown
