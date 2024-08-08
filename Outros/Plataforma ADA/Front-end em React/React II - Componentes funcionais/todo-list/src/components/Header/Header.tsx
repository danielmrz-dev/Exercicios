import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import style from "./style.module.scss";
import { TasksContext } from "../../Context/TasksContext";

export const Header: React.FC = () => {

    const { tasks } = useContext(TasksContext)
    
    const totalTasks = tasks.length;
    const pendingTasks = tasks.reduce((total, task) =>{
        if (!task.concluida) return total + 1;            
        return total;
    }, 0);
    const completedTasks = totalTasks - pendingTasks;

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem vindo, Daniel!</span>
                </div>

                <div> 
                    <StatsCard titulo="Total de tarefas" valor={totalTasks} /> 
                    <StatsCard titulo="Tarefas pendentes" valor={pendingTasks} /> 
                    <StatsCard titulo="Tarefas concluídas" valor={completedTasks} /> 
                </div>
            </div>
        </header>


    )
}