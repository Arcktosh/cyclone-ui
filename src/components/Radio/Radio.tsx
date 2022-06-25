import "./Radio.css"

export interface RadioProps {}

const Radio = (props: RadioProps) => {
  return <input type="radio" name="radio-1" className="radio" checked />
}

export default Radio
