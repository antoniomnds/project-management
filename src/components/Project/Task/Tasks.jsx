import Task from "./Task.jsx";

export default function Tasks({tasks}) {
  return (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between my-4">
          <Task task={task.content}/>
        </li>
      ))}
    </ul>
  );
}