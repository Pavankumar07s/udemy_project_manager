import SideBar from "./conponents/SideBar";
import NewProject from "./conponents/NewProject";
import NoProject from "./conponents/NoProject";
import {state} from "react"
import { useState } from "react";
function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    project:[]
  })

  const handlestartAddProject=()=>{
    setProjectState((previous)=>{return{...previous,selectedProjectId:null}})
  }
  let content;

  if(projectState.selectedProjectId===undefined){
      content=<NoProject onStartAddProject={handlestartAddProject}/>
  }
  else{
      content= <NewProject/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
    <SideBar onStartAddProject={handlestartAddProject}/>
    {content}
    </main>
  );
}

export default App;
