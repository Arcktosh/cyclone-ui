import "./Progress.css"
export interface ProgressProps {}
const Progress = (props: ProgressProps) => {
  return <progress className="progress w-56" value="100" max="100"></progress>
}

export default Progress
