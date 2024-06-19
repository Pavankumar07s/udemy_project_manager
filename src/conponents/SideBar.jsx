import Button from "./Button"
export default function SideBar({onStartAddProject,projects,onSeelectProject,selectedProjectId}){
    
    return(
        <>
        <div className="side-bar w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECT</h2>
            <Button onClick={onStartAddProject}>+Add project</Button>
            <ul className="mt-8">
                {projects.map((project)=>{
                    let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if(project.id==selectedProjectId){
                        cssClasses+=" bg-stone-800 text-stone-200"
                    }
                    else{
                        cssClasses+=" text-stone-400"
                    }
                    return (<li key={project.id}><button 
                        onClick={()=>onSeelectProject(project.id)}
                        className={cssClasses}
                        >{project.title}</button></li>)
                 }
            )
        }
            </ul>
        </div>
        </>
    )
}