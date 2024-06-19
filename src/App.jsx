import SideBar from "./conponents/SideBar";
import NewProject from "./conponents/NewProject";
import NoProject from "./conponents/NoProject";
import { useState } from "react";
import SelectedProject from "./conponents/SelectedProject";
function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    project:[]
  })

  const handleSelectProject=(id)=>{
    setProjectState((previous)=>{return{...previous,selectedProjectId:id}})
  }
  const handlestartAddProject=()=>{
    setProjectState((previous)=>{return{...previous,selectedProjectId:null}})
  }
  const handlecancleAddProject=()=>{
    setProjectState((previous)=>{return{...previous,selectedProjectId:undefined}})
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
  let selectedProject=projectState.project.find((project)=>project.id==projectState.selectedProjectId)
  let content=<SelectedProject project={selectedProject}/>;

  if(projectState.selectedProjectId===undefined){
      content=<NoProject onStartAddProject={handlestartAddProject}/>
  }
  else if(projectState.selectedProjectId===null){
      content= <NewProject onAdd={handleAddProject} onCancle={handlecancleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar onStartAddProject={handlestartAddProject} 
    projects={projectState.project} 
    onSeelectProject={handleSelectProject}
  />

    {content}
    </main>
  );
}

export default App;
