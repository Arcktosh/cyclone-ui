import "./RangeSlider.css"

export interface RangeSliderProps {}

const RangeSlider = (props: RangeSliderProps) => {
  return <input type="range" min="0" max="100" value="40" className="range" />
}

export default RangeSlider
