import {useRef, useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/Project/NewProject.jsx";
import NoProjectSelected from "./components/Project/NoProjectSelected.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const dialog = useRef();

  function handleNewProject() {
    setNewProject(true);
  }

  function handleCancelNewProject() {
    setNewProject(false);
  }

  function handleSetProjects(project) {
    if (
      projects.findIndex(elem => elem.title === project.title) !== -1 ||
      !project.title ||
      !project.description ||
      !project.dueDate
    ) {
      dialog.current.open();
      return;
    }
    setProjects(prevProjects => [...prevProjects, project]);
    setNewProject(false);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleDeleteProject(project) {
    setProjects(prevProjects => {
      const idx = prevProjects.findIndex((proj) => proj.title === project.title);
      return prevProjects.splice(idx, 1);
    })
    setSelectedProject(null);
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
            <NewProject
              ref={dialog}
              onCancelNewProject={handleCancelNewProject}
              onSetProjects={project => handleSetProjects(project)} /> :
            (
              selectedProject ?
                <Project project={selectedProject} onDelete={handleDeleteProject} /> :
                <NoProjectSelected onNewProject={handleNewProject}/>
            )
        }
      </div>
    </main>
  );
}

export default App;
