import Button from "./Button"
export default function SideBar({onStartAddProject}){
    
    return(
        <>
        <div className="side-bar w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECT</h2>
            <Button onClick={onStartAddProject}>+Add project</Button>
            <ul className="mt-8">
        
            </ul>
        </div>
        </>
    )
}