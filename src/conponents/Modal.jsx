
import { createPortal } from "react-dom"
import { forwardRef, useRef ,useImperativeHandle} from "react"

 const Modal=forwardRef(function Modal({children,buttonText},ref){
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    return createPortal(<dialog ref={dialog}>
        {children}
        <form action="dialog">
            <button>{buttonText}</button>
        </form>
    </dialog>,document.getElementById("modal-root"))
   
})

export default Modal;