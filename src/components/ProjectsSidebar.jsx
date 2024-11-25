import Button from "./Button.jsx";

export default function ProjectsSidebar({onNewProject, projectState, onSelectProject}) {
  let projectButtonClassName = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <Button onClick={onNewProject}>
        + Add Project
      </Button>
      <ul className="mt-8">
        {projectState.projects.length > 0 && projectState.projects.map(project => (
          <li key={project.title}>
            <button
              className={`${projectButtonClassName} ${project === projectState.selectedProject ? 'bg-stone-800' : ''}`}
              onClick={() => onSelectProject(project)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}