import NewTask from "./NewTasks"
export default function Task({ onAdd, onDelete, tasks=[] }) {
    function handleDelete(taskId) {
        onDelete(taskId); // Use taskId to delete the specific task
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length > 0 ? (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-end my-4">
                            <span>{task.text}</span>
                            <button
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => handleDelete(task.id)} // Pass the task.id to handleDelete
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are no tasks. Click on Add task button to add a task.</p>
            )}
        </section>
    );
}