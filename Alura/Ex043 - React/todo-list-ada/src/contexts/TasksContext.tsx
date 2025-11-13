import React, { createContext, useEffect, useState } from "react";
import type { ITask } from "../types/tasks.interface";

interface ITasksContextData {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<ITasksContextData>({} as ITasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const loadTasks = () => {
      const storagedTasks = localStorage.getItem("tasks");
      if (storagedTasks) {
        setTasks(JSON.parse(storagedTasks));
      }
    };
    loadTasks();
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
  );
};
