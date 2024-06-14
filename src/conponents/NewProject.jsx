import Input from "./Input"
export default function NewProject(){
    return<div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950">cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        
    </menu>
    <div>
        <Input lable={"Title"}/>
        <Input lable={"Description"} isTextArea/>
        <Input lable={"Duedate"}/>
    </div>
    </div>
}