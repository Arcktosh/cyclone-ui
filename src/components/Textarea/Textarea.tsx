import "./Textarea.css"

export interface TextareaProps {}

const Textarea = (props: TextareaProps) => {
  return <textarea className="textarea" placeholder="Bio"></textarea>
}

export default Textarea
