import "./RadialProgress.css"

export interface RadialProgressProps {}

const RadialProgress = (props: RadialProgressProps) => {
  const counter = { "--value": 10 } as React.CSSProperties

  return (
    <div className="radial-progress" style={counter}>
      70%
    </div>
  )
}

export default RadialProgress
