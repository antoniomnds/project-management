import Button from "./Button.jsx";

export default function ProjectsSidebar({onNewProject, projects, selectedProjectId, onSelectProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <Button onClick={onNewProject} disabled={selectedProjectId === null}>
        + Add Project
      </Button>
      <ul className="mt-8">
        {projects.length > 0 && projects.map(project => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 disabled:bg-stone-800 disabled:text-stone-600 disabled:pointer-events-none";

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400'
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
                disabled={selectedProjectId === null}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}