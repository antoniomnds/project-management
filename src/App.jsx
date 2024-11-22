import {useState} from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [hasError, setHasError] = useState(false)

  function handleNewProject() {
    setNewProject(true);
  }

  function handleCancelNewProject() {
    setNewProject(false);
  }

  function handleSetProjects(project) {
    if (projects.findIndex(elem => elem.title === project.title) !== -1) {
      setHasError(true);
      return;
    }
    setProjects(prevProjects => [...prevProjects, project]);
    setNewProject(false);
    setHasError(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onNewProject={handleNewProject}
        projects={projects}
      />
      <div className="w-[35rem] mt-16">
        {!newProject && <NoProjectSelected onNewProject={handleNewProject}/>}
        {newProject && <NewProject onCancelNewProject={handleCancelNewProject}
                                   onSetProject={(project => handleSetProjects(project))}
                                   hasError={hasError} />}
      </div>
    </main>
  );
}

export default App;
