import React from "react";
import { ReplaceSpaces } from "../../scripts";
import { Colors, Directions } from "../../static";
import "./Tooltip.css";

export interface TooltipProps {
  open?: boolean;
  direction?: Directions;
  color?: Colors;
  tip?: string;
  children?: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const color = props.color ? `tooltip-${props.color}` : "";
  const direction = props.direction ? `tooltip-${props.direction}` : "";
  const open = props.open ? `tooltip-open` : "";
  const classes = ReplaceSpaces(`tooltip ${color} ${direction} ${open} `);

  return (
    <div
      className={classes}
      data-tip={props.tip ? props.tip : "tip comes here"}
    >
      {props?.children ? (
        props?.children
      ) : (
        <button className="btn">{props.tip ? props.tip : "Hello"}</button>
      )}
    </div>
  );
};

export default Tooltip;
