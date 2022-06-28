export type Sizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"

export const ResponsiveSizes = (size: Sizes) => {
  switch (size) {
    case "xs":
      return "sm:w-1/3 md:w-1/6 lg:w-1/8 xl:w-1/10"
    case "sm":
      return "sm:w-1/2 md:w-1/3 lg:1/4 xl:w-1/5"
    case "lg":
      return "sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
    default:
      return "sm:btn-sm md:btn-md lg:btn-lg"
  }
}
