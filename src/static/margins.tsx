import ReplaceSpaces from "../scripts/replaceSpaces"

export type Margins = {
  top?: number
  bottom?: number
  left?: number
  right?: number
  horizontal?: number
  vertical?: number
  custom?: string
}

export const MarginClasses = (margins: Margins) => {
  return `${
    margins
      ? ReplaceSpaces(
          `${margins.top ? `mt-${margins.top}` : ""} ${
            margins.bottom ? `mb-${margins.bottom}` : ""
          } ${margins.left ? `ml-${margins.left}` : ""} ${
            margins.right ? `mr-${margins.right}` : ""
          } ${margins.horizontal ? `mx-${margins.horizontal}` : ""} ${
            margins.vertical ? `my-${margins.vertical}` : ""
          } ${margins.custom ? margins.custom : ""}`
        )
      : ""
  }`
}
