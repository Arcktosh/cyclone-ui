import ReplaceSpaces from "../scripts/replaceSpaces"

export type Paddings = {
  top?: number
  bottom?: number
  left?: number
  right?: number
  horizontal?: number
  vertical?: number
  custom?: string
}

export const PaddingClasses = (paddings: Paddings) => {
  return `${
    paddings
      ? ReplaceSpaces(
          `${paddings.top ? `pt-${paddings.top}` : ""} ${
            paddings.bottom ? `pb-${paddings.bottom}` : ""
          } ${paddings.left ? `pl-${paddings.left}` : ""} ${
            paddings.right ? `pr-${paddings.right}` : ""
          } ${paddings.horizontal ? `px-${paddings.horizontal}` : ""} ${
            paddings.vertical ? `py-${paddings.vertical}` : ""
          } ${paddings.custom ? paddings.custom : ""}`
        )
      : ""
  }`
}
