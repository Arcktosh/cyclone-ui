import "./Toggle.css"

export interface ToggleProps {}

const Toggle = (props: ToggleProps) => {
  return <input type="checkbox" className="toggle" checked />
}

export default Toggle
