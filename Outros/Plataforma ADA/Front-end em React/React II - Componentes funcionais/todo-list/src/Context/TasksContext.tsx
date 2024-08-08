import { createContext, useEffect, useState } from "react";

interface TasksProviderProps {
    children: React.ReactNode;
}

interface TasksContextData {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export interface Task {
    title: string;
    concluida: boolean;
    id: number;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState([] as Task[]);

    useEffect(() => {
        const storagedTasks = localStorage.getItem("tasks");
        if (storagedTasks) {
            setTasks(JSON.parse(storagedTasks));
        }
    }, []);

    return (
        <TasksContext.Provider 
        value={{
            tasks,
            setTasks,
        }}
        >
            {children}
        </TasksContext.Provider>
    )
}