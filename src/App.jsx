import {useState} from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);

  function handleNewProject() {
    setNewProject(true);
  }

  function handleCancelNewProject() {
    setNewProject(false);
  }

  function handleSetProjects(project) {
    setProjects(prevProjects => [...prevProjects, project]);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onNewProject={handleNewProject} projects={projects}/>
      <div className="w-[35rem] mt-16">
        {
          newProject ?
            <NewProject
              onCancelNewProject={handleCancelNewProject}
              onSetProject={(project => handleSetProjects(project))}
            /> :
            <NoProjectSelected onNewProject={handleNewProject}/>
        }
      </div>
    </main>
  );
}

export default App;
