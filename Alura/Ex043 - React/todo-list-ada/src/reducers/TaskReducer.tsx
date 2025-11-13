import { useReducer } from "react";
import type { ITask } from "../types/tasks.interface";

type Action = {
  type: "check" | "uncheck";
  payload?: string;
}

export const TaskReducer = (state: ITask, action: Action) => {
  switch (action.type) {
    case "check":
      return {
        ...state,
        completed: true
      }
    case "uncheck":
      return {
        ...state,
        completed: false 
      }
    default:
      return state;
  }
}