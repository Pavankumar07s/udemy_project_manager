import Input from "./Input"
import { useRef } from "react"
export default function NewProject({onAdd}){
    let title=useRef();
    let description=useRef()
    let duedate=useRef()
    const handleOnSave=()=>{
         const Title=title.current.value;
         const Description =description.current.value;
         const DueDate=duedate.current.value;

         onAdd({
            title:Title,
            description:Description,
            duedate:DueDate,
         })

    }


    return<div className="w-[35rem] mt-16">
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
}