import { FormEvent, useState } from "react";
import style from "./style.module.scss";

interface Task {
    title: string;
    concluida: boolean;
    id: number;
}

export const Tasks: React.FC = () => {

    const [taskTitle, setTaskTitle] = useState("")
    const [tasks, setTasks] = useState([] as Task[]);

    // Função disparada quando o usuário adiciona uma nova tarefa
    function handleSubmitAddTask(evento: FormEvent) {
        evento.preventDefault();
        if (taskTitle.length < 3) {
            alert("Não é possível adicionar uma tarefa com menos de 3 letras.");
            return;
        }

        setTasks([
            ...tasks,
            {
                id: new Date().getTime() , title: taskTitle, concluida: false
            }
        ])

        setTaskTitle("");
    }

    return (
        <section className={style.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar tarefa</label>
                    <input 
                        type="text" 
                        value={taskTitle} 
                        onChange={(evento) => setTaskTitle(evento.target.value)}
                        id="task-title" 
                        placeholder="Título da tarefa" />
                </div>
                <button>Adicionar tarefa</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}>{task.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}