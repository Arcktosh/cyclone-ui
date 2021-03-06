import { Colors } from "../../static"
import "./CodeMockup.css"

type Code = {
  prefix?: string
  code?: string
  class?: string
}
export interface CodeMockupProps {
  code?: Code[]
  bgColor?: Colors
}

const CodeMockup = (props: CodeMockupProps) => {
  const bgColor = props.bgColor
    ? `bg-${props.bgColor} text-${props.bgColor}-content`
    : ""

  return (
    <div className={`mockup-code ${bgColor}`}>
      {props.code ? (
        props.code.map((item) => (
          <pre data-prefix={item.prefix} className={item.class}>
            <code>{item.code}</code>
          </pre>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default CodeMockup
