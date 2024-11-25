import {useRef, forwardRef} from "react";
import Input from "../Input.jsx";
import ProjectError from "./ProjectError.jsx";

const NewProject =
  forwardRef(
    function ProjectForm({onCancelNewProject, onCreateProject},  ref) {
      const title = useRef();
      const description = useRef();
      const dueDate = useRef();

      function handleSave() {
        onCreateProject({
          title: title.current.value,
          description: description.current.value,
          dueDate: dueDate.current.value,
          tasks: []
        });
      }

      return (
        <div className="w-[35rem] mt-16">
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button
                className="text-stone-800 hover:text-stone-950"
                onClick={onCancelNewProject}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}
              >
                Save
              </button>
            </li>
          </menu>
          <ProjectError ref={ref}/>
          <div>
            <Input ref={title} label="Title" type="text"/>
            <Input ref={description} textarea label="Description" type="text"/>
            <Input ref={dueDate} label="Due Date" type="date"/>
          </div>
        </div>
      );
    }
  );

export default NewProject;