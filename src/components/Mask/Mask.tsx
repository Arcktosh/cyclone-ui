import "./Mask.css"
export interface MaskProps {}
const Mask = (props: MaskProps) => {
  return (
    <img
      className="mask mask-squircle"
      src="https://api.lorem.space/image/shoes?w=160&h=160"
    />
  )
}

export default Mask
