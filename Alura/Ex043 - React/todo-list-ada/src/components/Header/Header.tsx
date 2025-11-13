import React from "react";
import s from "./Header.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.container__content}>
          <h1>MyTODO</h1>
          <span>Bem vindo, Daniel</span>
        </div>
      </div>
      <div className={s.container}>
        <StatsCard title="Total de tarefas" value={5} />
        <StatsCard title="Tarefas pendentes" value={4} />
        <StatsCard title="Tarefas concluídas" value={1} />
      </div>
    </header>
  );
};
