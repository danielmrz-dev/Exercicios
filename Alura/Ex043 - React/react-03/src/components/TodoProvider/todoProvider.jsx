import { useState } from "react";
import { TodoContext } from ".";

export const TodoProvider = ({ children }) => {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prev) => {
      const todo = {
        id: prev.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prev, todo];
    });
  };

  const toggleCompleted = (todo) => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const removoTodo = (todo) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== todo.id);
    });
  };

  // const editTodo = (todo) => {
  //   setTodos((prev) => {
  //     return prev.map((t) => {
  //       if (t.id === todo.id) {
  //         return {
  //           ...t,
  //           description: t.description,
  //         };
  //       }
  //       return t;
  //     });
  //   });
  // };

  return (
    <TodoContext value={{
      todos,
      addTodo, 
      toggleCompleted,
      removoTodo
    }}>
      {children}
    </TodoContext>
  );
};
