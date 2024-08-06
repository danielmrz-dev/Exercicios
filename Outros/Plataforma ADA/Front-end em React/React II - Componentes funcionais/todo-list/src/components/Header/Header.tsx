import { useState } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import style from "./style.module.scss";

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem vindo, Daniel!</span>
                </div>

                <div> 
                    <StatsCard titulo="Total de tarefas" valor={5} /> 
                    <StatsCard titulo="Tarefas pendentes" valor={4} /> 
                    <StatsCard titulo="Tarefas concluídas" valor={1} /> 
                </div>
            </div>
        </header>


    )
}