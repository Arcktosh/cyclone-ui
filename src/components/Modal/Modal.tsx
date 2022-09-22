import { CSSProperties, ReactNode, useState } from 'react'
import { Button, ButtonProps } from '../Button'

export type popup = {
    heading?: string
    message?: string
}

export interface ModalProps {
    button?: ButtonProps
    message?: popup
    children?: ReactNode
    classes?: string
    style?: CSSProperties
}

export const Modal = (props: ModalProps) => {
    const [showModal, setShowModal] = useState(false)

    const handle = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <Button label={props.button?.label ? props.button.label : 'X'} onClick={() => handle()} {...props.button} />
            <input type="checkbox" id="modal" className="modal-toggle" checked={showModal} onChange={handle} />
            <div className={`modal modal-bottom sm:modal-middle ${props.classes}`} style={props.style}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{props.message?.heading}</h3>
                    <p className="py-4">{props.message?.message}</p>
                    <div>{props?.children}</div>
                    <div className="modal-action">
                        <label htmlFor="modal" className="btn btn-circle" onClick={() => handle}>
                            x
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
