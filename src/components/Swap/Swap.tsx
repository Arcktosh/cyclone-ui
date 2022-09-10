import { ReplaceSpaces } from "../../scripts";
import { Sizes } from "../../static";
import "./Swap.css";

export interface SwapProps {
  on?: React.ReactNode | string;
  off?: React.ReactNode | string;
  active?: boolean;
  rotate?: boolean;
  flip?: boolean;
  hamburgerButton?: boolean;
  size?: Sizes
}

const Swap = (props: SwapProps) => {
  const classes = ReplaceSpaces(
    `swap ${props.flip ? "swap-flip" : ""} ${
      props.rotate ? "swap-rotate" : ""
    } ${props.size?`text-${props.size}`:''}`
  );
  
  return props.hamburgerButton ? (
    <label className={`btn btn-circle ${classes}`}>
      <input type="checkbox" />
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  ) : (
    <label className={classes}>
      <input type="checkbox" />
      <div className="swap-on">{props.on}</div>
      <div className="swap-off">{props.off}</div>
    </label>
  );
};

export default Swap;
