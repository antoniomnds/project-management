import {useRef} from "react";

export default function NewProject({onCancelNewProject, onSetProject, hasError}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    onSetProject({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    });
  }

  return (
    <>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onCancelNewProject}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      {hasError && <p>Project title must be unique!</p>}
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">Title</label>
        <input
          ref={title}
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>

      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">Description</label>
        <input
          ref={description}
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>

      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
        <input
          ref={dueDate}
          type="date"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>

      </p>
    </>
  );
}