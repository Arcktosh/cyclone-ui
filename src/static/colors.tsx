export type Colors =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "light"
  | "dark"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "error"
  | "neutral"

export const backgrounds = (color: string) => {
  return `bg-${color} text-${color}-content`
}
