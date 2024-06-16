import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";
export default function NewProject({onAdd}){

    const modal=useRef();
    let title=useRef();
    let description=useRef()
    let duedate=useRef()
    const handleOnSave=()=>{
         const Title=title.current.value;
         const Description =description.current.value;
         const DueDate=duedate.current.value;
        // --------------------------
    if(Title.trim()=="" ||Description.trim()=="" ||DueDate.trim()=="" ){
        // show error modal
        modal.current.open()
        return;
       
    }
        onAdd({
            title:Title,
            description:Description,
            duedate:DueDate,
         })

    }


    return<>
     <Modal ref={modal} buttonText="okah">
            <h2>There is some Error</h2>
            <p>Please check weather any data is missed out</p>
    </Modal>
    <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950">cancel</button></li>
        <li><button onClick={handleOnSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        
    </menu>
    <div>
        <Input ref={title} type="text" lable={"Title"}/>
        <Input ref={description} lable={"Description"} isTextArea/>
        <Input ref={duedate} type="date" lable={"Duedate"}/>
    </div>
    </div>
    </>
}