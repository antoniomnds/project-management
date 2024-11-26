import Task from "./Task/Task.jsx";
import NewTask from "./Task/NewTask.jsx";
import {useState} from "react";

export default function Tasks({project}) {
  const [, setTasks] = useState([...project.tasks]);

  function handleAddTask(content) {
    const task = {
      id: crypto.randomUUID(),
      content: content
    };
    project.tasks.push(task);
    setTasks([...project.tasks]);
  }

  function handleRemoveTask(id) {
    project.tasks = project.tasks.filter(task => task.id !== id);
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
                <Task task={task} onRemove={() => handleRemoveTask(task.id)}/>
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