import {useRef, forwardRef} from "react";
import Input from "./Input.jsx";
import ProjectError from "./ProjectError.jsx";

const ProjectForm =
  forwardRef(
    function ProjectForm({onCancelNewProject, onSetProjects},  ref) {
      const title = useRef();
      const description = useRef();
      const dueDate = useRef();

      function handleSave() {
        onSetProjects({
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
          <ProjectError ref={ref} />
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" type="text" />
          <Input ref={dueDate} label="Due Date" type="date" />
        </>
      );
    }
  );

export default ProjectForm;