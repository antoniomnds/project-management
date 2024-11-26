import Task from "./Task/Task.jsx";
import NewTask from "./Task/NewTask.jsx";
import {useState} from "react";

export default function Tasks({project}) {
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
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={handleAddTask}/>
      {
        project.tasks.length > 0 ?
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {project.tasks.map(task => (
              <li key={task.id} className="flex justify-between my-4">
                <Task task={task} onRemove={task => handleRemoveTask(task)}/>
              </li>
            ))}
          </ul> :
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
      }
    </section>
  );
}