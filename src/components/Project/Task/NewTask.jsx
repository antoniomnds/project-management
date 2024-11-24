import {useRef} from "react";

export default function NewTask({onAddTask}) {
  const task = useRef();

  function handleClick() {
    onAddTask(task.current.value);
    task.current.value = "";
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={task}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}