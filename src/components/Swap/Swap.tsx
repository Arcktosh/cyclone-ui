import "./Swap.css"

export interface SwapProps {}

const Swap = (props: SwapProps) => {
  return (
    <label className="swap">
      <input type="checkbox" />
      <div className="swap-on">ON</div>
      <div className="swap-off">OFF</div>
    </label>
  )
}

export default Swap
