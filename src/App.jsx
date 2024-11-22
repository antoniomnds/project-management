import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onNewProject={handleNewProject}
        projects={projects}
        selectedProject={selectedProject}
        onSelectProject={handleSelectProject}
      />
      <div className="w-[35rem] mt-16">
        {
          newProject ?
            <NewProject onCancelNewProject={handleCancelNewProject}
                        onSetProjects={project => handleSetProjects(project)}
                        hasError={hasError} /> :
            (
              selectedProject ?
                <Project project={selectedProject} /> :
                <NoProjectSelected onNewProject={handleNewProject}/>
            )
        }
      </div>
    </main>
  );
}

export default App;
