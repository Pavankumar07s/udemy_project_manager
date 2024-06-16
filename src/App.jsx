import SideBar from "./conponents/SideBar";
import NewProject from "./conponents/NewProject";
import NoProject from "./conponents/NoProject";
import { useState } from "react";
function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    project:[]
  })

  const handlestartAddProject=()=>{
    setProjectState((previous)=>{return{...previous,selectedProjectId:null}})
  }

  const handleAddProject=(projectData)=>{
    let ProjectId=Math.random()*100;
    setProjectState((previous)=>{
      const newProject={
        ...projectData,
        id:ProjectId,
      }
      return{
      ...previous,
      selectedProjectId:undefined,
      project:[...previous.project,newProject]
      }
    }
   )
  }
  let content;

  if(projectState.selectedProjectId===undefined){
      content=<NoProject onStartAddProject={handlestartAddProject}/>
  }
  else{
      content= <NewProject onAdd={handleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar onStartAddProject={handlestartAddProject} projects={projectState.project}/>
    {content}
    </main>
  );
}

export default App;
