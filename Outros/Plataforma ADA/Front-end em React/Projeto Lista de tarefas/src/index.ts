const formulario = document.querySelector<HTMLFormElement>("#todo-form");
const taskTitleInput = document.querySelector<HTMLInputElement>("#task-title-input");
const todoListUl = document.querySelector<HTMLUListElement>("#todo-list");

window.onload = () => {
    const storagedTasksJSON = localStorage.getItem("tasks");
    if (!storagedTasksJSON) return;

    tasks = JSON.parse(storagedTasksJSON);
    tasks.forEach(t => {
        renderTaskOnHTML(t.title, t.complete);
    });
};

interface Task {
    title: string;
    complete: boolean
}

let tasks: Task[] = [];

formulario!.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const taskTitle: string = taskTitleInput!.value;

    if (taskTitle.length < 3) {
        alert("Sua tarefa precisa ter mais do que 3 caracteres.");
        return;
    }

    tasks.push({
        title: taskTitle,
        complete: false,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks))

    renderTaskOnHTML(taskTitle);

    taskTitleInput!.value = "";
    
});


function renderTaskOnHTML(taskTitle: string, complete = false) {
    const li: HTMLLIElement = document.createElement("li");
    const checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", (evento) => {
        const target = evento.target as HTMLInputElement;
        const liToToggle = target.parentElement as HTMLLIElement;
        const span = liToToggle.querySelector("span");
        const completed = target.checked;
        if (completed) {
            span!.style.textDecoration = "line-through";
        } else {
            span!.style.textDecoration = "none";
        }

        tasks = tasks.map(t => {
            if (t.title === span?.textContent) {
                return {
                    title: t.title,
                    complete: !t.complete,
                };
            }
            return t;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });
    checkbox.checked = complete;

    const span: HTMLSpanElement = document.createElement("span");
    span.textContent = taskTitle;

    if (complete) {
        span!.style.textDecoration = "line-through";
    }


    const btnRemover: HTMLButtonElement = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", (evento) => {
        const target = evento.target as HTMLButtonElement;
        const liToRemove = target.parentElement as HTMLLIElement;
        const tituloDaTarefa = liToRemove.querySelector("span")?.textContent;
        tasks = tasks.filter(task => task.title !== tituloDaTarefa);
        todoListUl?.removeChild(liToRemove);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // console.log(tasks);       
    });

    todoListUl?.appendChild(li);
    li.append(checkbox, span, btnRemover);
}

