import { FormEvent, useContext, useState } from "react";
import style from "./style.module.scss";
import { TasksContext } from "../../Context/TasksContext";

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const { tasks, setTasks } = useContext(TasksContext);

    // Função disparada quando o usuário adiciona uma nova tarefa
    function handleSubmitAddTask(evento: FormEvent) {
        evento.preventDefault();
        if (taskTitle.length < 3) {
            alert("Não é possível adicionar uma tarefa com menos de 3 letras.");
            return;
        }

        const newTasks = [
            ...tasks,
            {
                id: new Date().getTime(),
                title: taskTitle,
                concluida: false,
            },
        ];

        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setTaskTitle("");
    }

    function handleToggleTaskStatus(taskId: number) {
        const newTasks = tasks.map((task) => {
            if (taskId === task.id) {
                return {
                    ...task,
                    concluida: !task.concluida,
                };
            }
            return task;
        });
        setTasks(newTasks);
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
                        placeholder="Título da tarefa"
                    />
                </div>
                <button>Adicionar tarefa</button>
            </form>

            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            {" "}
                            {/* É necessário passar um identificador para o primeiro elemento renderizado */}
                            <input
                                type="checkbox"
                                id={`task-${task.id}`}
                                onChange={() => handleToggleTaskStatus(task.id)}
                            />
                            <label htmlFor={`task-${task.id}`} className={task.concluida === true ? style.concluida : ""}>
                                {task.title}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
