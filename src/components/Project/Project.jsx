import {dateFormatter} from "../../utils.js";
import {useState} from "react";
import NewTask from "./Task/NewTask.jsx";
import Tasks from "./Task/Tasks.jsx";

export default function Project({project, onDelete}) {
  const [, setTasks] = useState([...project.tasks]);

  function handleAddTask(content) {
    const task = {
      id: project.tasks.length + 1,
      content: content
    };
    project.tasks.push(task);
    setTasks([...project.tasks]);
  }

  function handleRemoveTask(task) {
    const idx = project.tasks.findIndex((elem) => elem.content === task.content);
    project.tasks.splice(idx, 1);
    // reassign IDs so they are contiguous, which avoids the need for a global counter for the ID
    for (let i = idx; i < project.tasks.length; i++) {
      project.tasks[i].id = i + 1;
    }
    setTasks([...project.tasks])
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{dateFormatter(project.dueDate)}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={handleAddTask}/>
      { project.tasks.length > 0 && <Tasks tasks={project.tasks} onRemoveTask={handleRemoveTask}/> }
    </div>
  )
    ;
}