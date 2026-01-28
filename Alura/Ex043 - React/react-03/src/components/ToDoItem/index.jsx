import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";

export function ToDoItem({ item, onToggle, onDelete, onEditTodo }) {
  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => onToggle(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => onDelete(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => onEditTodo(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
