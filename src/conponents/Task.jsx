import NewTask from "./NewTaks"
export default function Task(){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
        <NewTask/>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">here will be list ofd task</ul>
    </section>
}