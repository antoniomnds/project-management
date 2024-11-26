import {useState} from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/Project/NewProject.jsx";
import NoProjectSelected from "./components/Project/NoProjectSelected.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // undefined if not adding a new project or selected a project; null if adding a new project
    projects: []
  });

  function handleNewProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null
    }));
  }

  function handleCancelNewProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    }));
  }

  function handleCreateProject(project) {
    setProjectState(prevState => ({
      selectedProjectId: project.id,
      projects: [...prevState.projects, project],
    }))
  }

  function handleSelectProject(projectId) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: projectId
    }));
  }

  function handleDeleteProject(project) {
    setProjectState(prevState => {
      const newProjects = [...(prevState.projects)];
      const idx = newProjects.findIndex((proj) => proj.title === project.title);
      newProjects.splice(idx, 1);

      return {
        selectedProjectId: null,
        projects: newProjects
      }
    });
  }

  const selectedProject = projectState.projects.find(elem => elem.id === projectState.selectedProjectId);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onNewProject={handleNewProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onSelectProject={handleSelectProject}
      />
      {
        projectState.selectedProjectId === null ?
          <NewProject
            onCancelNewProject={handleCancelNewProject}
            onCreateProject={handleCreateProject} /> :
          (
            projectState.selectedProjectId === undefined ?
              <NoProjectSelected onNewProject={handleNewProject}/> :
              <Project project={selectedProject} onDelete={handleDeleteProject} />
          )
      }
    </main>
  );
}

export default App;
