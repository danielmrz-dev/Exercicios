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
import { use, useState } from "react";
import { TodoContext } from "./components/TodoProvider";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => setShowDialog(!showDialog);

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    toggleDialog();
  }

  const { 
    todos, 
    removoTodo, 
    toggleCompleted, 
    addTodo, 
    editTodo 
  } = use(TodoContext);

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <Dialog isOpen={showDialog} onClose={toggleDialog}>
          <TodoForm onSubmit={handleFormSubmit}/>
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
