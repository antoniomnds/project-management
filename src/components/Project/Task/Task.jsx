export default function Task({task, onRemove}) {
  function handleClick() {
    onRemove(task);
  }

  return (
    <>
      <p className="text-stone-800 my-4">{task.content}</p>
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={handleClick}
      >
        Clear
      </button>
    </>
  );
}