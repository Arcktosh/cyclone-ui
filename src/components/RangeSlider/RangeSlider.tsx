import { ReplaceSpaces } from "../../scripts";
import { Colors, Sizes } from "../../static";
import "./RangeSlider.css"

export interface RangeSliderProps {
  color?: Colors;
  size?: Sizes;
  min?: number;
  max?: number;
  value?: number;
  steps?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const RangeSlider = (props: RangeSliderProps) => {
  const classes = ReplaceSpaces(
    `range ${props.size ? `range-${props.size}` : ""} ${props.color ? `range-${props.color}` : ""}`
  );
  return (
    <>
      <input
        type="range"
        min={props.min ? props.min : 0}
        max={props.max ? props.max : 100}
        value={props.value}
        step={props.steps}
        className={classes}
        onChange={ props.onChange}
      />
      { props.children}
    </>
  );
}

export default RangeSlider
