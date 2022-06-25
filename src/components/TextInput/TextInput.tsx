import "./TextInput.css"

export interface TextInputProps {}

const TextInput = (props: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input w-full max-w-xs"
    />
  )
}

export default TextInput
