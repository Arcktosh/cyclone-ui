import "./Steps.css"

export interface StepsProps {}

const Steps = (props: StepsProps) => {
  return (
    <ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step step-primary">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Receive Product</li>
    </ul>
  )
}

export default Steps
