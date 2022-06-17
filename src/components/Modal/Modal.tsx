import { useState } from "react"
import Button from "../Button"
import "./Modal.css"

type popup = {
  heading?: string
  message?: string
}
type button = {
  label?: string
  bgColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "accent"
    | "ghost"
    | "link"
  shape?: "square" | "circle" | "block"
  isOutlined?: boolean
  isLoading?: boolean
  disabledAnimation?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isGlass?: boolean
  isWide?: boolean
  width?: number
  size?: "xs" | "sm" | "lg"
  utilClass?: string
  iconStart?: string //SVG
  iconEnd?: string //SVG
  tabIndex?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ModalProps {
  button?: button
  message?: popup
  children?: React.ReactNode
}

const Modal = (props: ModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const handle = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <Button
        label={props.button?.label ? props.button.label : "X"}
        bgColor="primary"
        onClick={() => handle()}
      />
      <input
        type="checkbox"
        id="modal"
        className="modal-toggle"
        checked={showModal}
        onChange={handle}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.message?.heading}</h3>
          <p className="py-4">{props.message?.message}</p>
          <div>{props?.children}</div>
          <div className="modal-action">
            <label
              htmlFor="modal"
              className="btn btn-circle"
              onClick={() => handle}
            >
              x
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
