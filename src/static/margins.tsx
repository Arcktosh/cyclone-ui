import ReplaceSpaces from "../scripts/replaceSpaces"

export type Margins = {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export const MarginClasses = (margins: Margins) => {
  return `${
    margins
      ? ReplaceSpaces(
          `${margins.top ? `pt-${margins.top}` : ""} ${
            margins.bottom ? `pb-${margins.bottom}` : ""
          } ${margins.left ? `pl-${margins.left}` : ""} ${
            margins.right ? `pr-${margins.right}` : ""
          }`
        )
      : ""
  }`
}
