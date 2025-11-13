import React, { useContext, useState } from "react";
import s from "./Tasks.module.scss";
import { TasksContext } from "../../contexts/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const { tasks, setTasks } = useContext(TasksContext);

  const handleSubmitAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.length <= 3) {
      alert("Descrição da tarefa muito curta.");
      return;
    }

    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, completed: false },
    ];

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  };

  const markTaskAsDone = (taskId: number) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        return {
          ...t,
          completed: !t.completed,
        };
      }
      return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <section className={s.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div className="">
          <label htmlFor="">Adicionar tarefa</label>
          <input
            type="text"
            id="task-title"
            placeholder="Título da tarefa"
            value={taskTitle}
            onChange={({ target }) => setTaskTitle(target.value)}
          />
        </div>
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return (
              <li key={t.id}>
                <input
                  type="checkbox"
                  name="task"
                  id={`task-${t.id}`}
                  onChange={() => markTaskAsDone(t.id)}
                  checked={t.completed}
                />
                <label
                  className={t.completed ? s.done : ""}
                  htmlFor={`task-${t.id}`}
                >
                  {t.title}
                </label>

                <button onClick={() => removeTask(t.id)}>Excluir</button>
              </li>
            );
          })
        ) : (
          <h3>Não há tarefas cadastradas.</h3>
        )}
      </ul>
    </section>
  );
};
