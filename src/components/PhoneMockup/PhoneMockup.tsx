import "./PhoneMockup.css"
export interface PhoneMockupProps {}
const PhoneMockup = (props: PhoneMockupProps) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">Hi.</div>
      </div>
    </div>
  )
}

export default PhoneMockup
