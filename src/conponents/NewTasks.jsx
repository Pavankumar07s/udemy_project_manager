import { useState } from "react"

export default function NewTask({onAdd}){
    const [enteredTask,setEnteredTask]=useState();

    function handleChange(event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        onAdd(enteredTask)
        setEnteredTask(' ')

    }
    return(
        <div className="flex items-center gap-4 my-4">
            <input type="text"  className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onChange={handleChange} onClick={()=>handleClick()} value={enteredTask} className="text-stone-700 hover:text-red-950">Add task</button>
        </div>
    )
}