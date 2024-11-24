export default function Task({task}) {
  return (
    <>
      <p className="text-stone-800 my-4">{task}</p>
      <button className="text-stone-700 hover:text-red-500">Clear</button>
    </>
  );
}