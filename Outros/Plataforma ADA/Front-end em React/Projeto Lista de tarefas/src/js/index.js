"use strict";
const formulario = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");
window.onload = () => {
    const storagedTasksJSON = localStorage.getItem("tasks");
    if (!storagedTasksJSON)
        return;
    tasks = JSON.parse(storagedTasksJSON);
    tasks.forEach(t => {
        renderTaskOnHTML(t.title, t.complete);
    });
};
let tasks = [];
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const taskTitle = taskTitleInput.value;
    if (taskTitle.length < 3) {
        alert("Sua tarefa precisa ter mais do que 3 caracteres.");
        return;
    }
    tasks.push({
        title: taskTitle,
        complete: false,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTaskOnHTML(taskTitle);
    taskTitleInput.value = "";
});
function renderTaskOnHTML(taskTitle, complete = false) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (evento) => {
        const target = evento.target;
        const liToToggle = target.parentElement;
        const span = liToToggle.querySelector("span");
        const completed = target.checked;
        if (completed) {
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
        }
        tasks = tasks.map(t => {
            if (t.title === (span === null || span === void 0 ? void 0 : span.textContent)) {
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
    const span = document.createElement("span");
    span.textContent = taskTitle;
    if (complete) {
        span.style.textDecoration = "line-through";
    }
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", (evento) => {
        var _a;
        const target = evento.target;
        const liToRemove = target.parentElement;
        const tituloDaTarefa = (_a = liToRemove.querySelector("span")) === null || _a === void 0 ? void 0 : _a.textContent;
        tasks = tasks.filter(task => task.title !== tituloDaTarefa);
        todoListUl === null || todoListUl === void 0 ? void 0 : todoListUl.removeChild(liToRemove);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        // console.log(tasks);       
    });
    todoListUl === null || todoListUl === void 0 ? void 0 : todoListUl.appendChild(li);
    li.append(checkbox, span, btnRemover);
}
