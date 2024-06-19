import Task from "./Task";
export default function SelectedProject({ project,onDelete }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

    return (
        <div className="flex  justify-between">
            <menu className="flex flex-col gap-4 my-4">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                <p className="text-gray-600">{formattedDate}</p>
                <button onClick={onDelete} className="text-stone-700 hover:text-stone-950">
                    Delete
                </button>
                <Task/>
            </menu>
        </div>
    );
}
