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

  function handleCreateProject(project) {
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
    setSelectedProject(null);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleDeleteProject(project) {
    setProjects(prevProjects => {
      const newProjects = [...prevProjects];
      const idx = newProjects.findIndex((proj) => proj.title === project.title);
      newProjects.splice(idx, 1);
      return newProjects;
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
      {
        newProject ?
          <NewProject
            ref={dialog}
            onCancelNewProject={handleCancelNewProject}
            onCreateProject={project => handleCreateProject(project)} /> :
          (
            selectedProject ?
              <Project project={selectedProject} onDelete={handleDeleteProject} /> :
              <NoProjectSelected onNewProject={handleNewProject}/>
          )
      }
    </main>
  );
}

export default App;
