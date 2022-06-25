import { Sizes } from "../../static"
import "./Countdown.css"

export interface CountdownProps {
  start?: Date
  end?: Date
  boxed?: boolean
  labelUnder?: boolean
  textSize?: Sizes
}

const Countdown = (props: CountdownProps) => {
  // const countDownToStart = props.start ? CountUp(props.start) : 0

  // const countDownToEnd = props.end ? CountDown(props.end) : 0
  // const [days, hours, minutes, seconds] =
  //   convertDateToDaysHoursMinSec(countDownToStart)

  const countdown = (value?: number, label?: string) => {
    const counter = { "--value": value } as React.CSSProperties
    return value ? (
      <>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={counter}></span>
          </span>
          {label}
        </div>
      </>
    ) : (
      <></>
    )
  }

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style="--value:15;"></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style="--value:10;"></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style="--value:24;"></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style="--value:22;"></span>
          </span>
          sec
        </div>
      </div>
      {countdown()}
      {countdown()}
    </>
  )
}

export default Countdown
