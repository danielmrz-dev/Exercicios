import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { Dialog } from "./components/Dialog";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm/todo-form";

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
// ];
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
// ];

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => setShowDialog(!showDialog);
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
    toggleDialog();
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

  const editTodo = (todo) => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            description: t.description
          }
        }
        return t;
      });
    });
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <Dialog isOpen={showDialog} onClose={toggleDialog}>
          <TodoForm onSubmit={addTodo} />
        </Dialog>

        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => !t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    onDelete={removoTodo}
                    key={t.id}
                    item={t}
                    onToggle={toggleCompleted}
                    onEditTodo={editTodo}
                  />
                );
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    onDelete={removoTodo}
                    onToggle={toggleCompleted}
                    key={t.id}
                    item={t}
                    onEditTodo={editTodo}
                  />
                );
              })}
          </ToDoList>
          <Footer>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
