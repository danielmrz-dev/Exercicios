import React, { useContext } from "react";
import s from "./Header.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { TasksContext } from "../../contexts/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => task.completed === false).length;
  const completedTasks = totalTasks - pendingTasks;

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.container__content}>
          <h1>MyTODO</h1>
          <span>Bem vindo, Daniel</span>
        </div>
      </div>
      <div className={s.container}>
        <StatsCard title="Total de tarefas" value={totalTasks} />
        <StatsCard title="Tarefas pendentes" value={pendingTasks} />
        <StatsCard title="Tarefas concluídas" value={completedTasks} />
      </div>
    </header>
  );
};
