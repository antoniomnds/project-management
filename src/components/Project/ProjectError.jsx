import {useRef, useImperativeHandle, forwardRef} from "react";
import {createPortal} from "react-dom";

const ProjectError = forwardRef(function ProjectError({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() { dialog.current.showModal() }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <form method="dialog" className="mt-4 text-right">
        <h2 className="text-xl font-bold text-stone-700 my-4">Error</h2>
        <p className="text-stone-600 mb-4">
          The information submitted is not valid:
          make sure that you fill all fields.
        </p>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default ProjectError;