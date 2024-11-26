import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/Project/NewProject.jsx";
import NoProjectSelected from "./components/Project/NoProjectSelected.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined, // undefined if not adding a new project or selected a project; null if adding a new project
    projects: []
  });

  function handleNewProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: null
    }));
  }

  function handleCancelNewProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: undefined
    }));
  }

  function handleCreateProject(project) {
    setProjectState(prevState => ({
      selectedProject: project,
      projects: [...prevState.projects, project],
    }))
  }

  function handleSelectProject(project) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: project
    }));
  }

  function handleDeleteProject(project) {
    setProjectState(prevState => {
      const newProjects = [...(prevState.projects)];
      const idx = newProjects.findIndex((proj) => proj.title === project.title);
      newProjects.splice(idx, 1);

      return {
        selectedProject: null,
        projects: newProjects
      }
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onNewProject={handleNewProject}
        projectState={projectState}
        onSelectProject={handleSelectProject}
      />
      {
        projectState.selectedProject === null ?
          <NewProject
            onCancelNewProject={handleCancelNewProject}
            onCreateProject={project => handleCreateProject(project)} /> :
          (
            projectState.selectedProject === undefined ?
              <NoProjectSelected onNewProject={handleNewProject}/> :
              <Project project={projectState.selectedProject} onDelete={handleDeleteProject} />
          )
      }
    </main>
  );
}

export default App;
