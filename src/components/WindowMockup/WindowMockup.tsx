import "./WindowMockup.css"

export interface WindowMockupProps {}

const WindowMockup = (props: WindowMockupProps) => {
  return (
    <div className="mockup-window border border-base-300">
      <div className="flex justify-center px-4 py-16 border-t border-base-300">
        Hello!
      </div>
    </div>
  )
}

export default WindowMockup
