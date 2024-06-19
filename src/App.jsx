import SideBar from "./conponents/SideBar";
import NewProject from "./conponents/NewProject";
import NoProject from "./conponents/NoProject";
import { useState } from "react";
import SelectedProject from "./conponents/SelectedProject";
function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[]
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
      projects:[...previous.projects,newProject]
      }
    }
   )
  }
  const handleDeleteProject=()=>{
    setProjectState((previous) => {
      return {
        ...previous,
        selectedProjectId: undefined,
        projects: previous.projects.filter(
          (project) => project.id !== previous.selectedProjectId
        ),
      };
    });
  }
  let selectedProject=projectState.projects.find((project)=>project.id==projectState.selectedProjectId)
  let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

  if(projectState.selectedProjectId===undefined){
      content=<NoProject onStartAddProject={handlestartAddProject}/>
  }
  else if(projectState.selectedProjectId===null){
      content= <NewProject onAdd={handleAddProject} onCancle={handlecancleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar onStartAddProject={handlestartAddProject} 
    projects={projectState.projects} 
    onSeelectProject={handleSelectProject}
  />

    {content}
    </main>
  );
}

export default App;
