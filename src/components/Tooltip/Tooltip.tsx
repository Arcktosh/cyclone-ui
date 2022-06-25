import "./Tooltip.css"

export interface TooltipProps {}

const Tooltip = (props: TooltipProps) => {
  return (
    <div className="tooltip" data-tip="hello">
      <button className="btn">Hover me</button>
    </div>
  )
}

export default Tooltip
