const checkbox = document.querySelector("#todo-checkbox");
const checkboxLabel = document.querySelector(".main__todo-list-item-label");
const addTaskBtn = document.querySelector(".main__add-new-task");
const TaskInput = document.querySelector(".main__input");
const tasksContainer = document.querySelector(".main__todo-list");
const lastDiv = document.querySelector(".main__todo-left-n-clear");
const toggleModeBtn = document.querySelector(".main__mode-icon");
const darkModeCheckbox = document.querySelector("#sun-moon");
const title = document.querySelector(".main__title");
const background = document.querySelector("body");
const allActiveCompleted = document.querySelector(
    ".main__all-active-completed"
);
const listItem = document.querySelector(".main__todo-list-item");
const deleteTaskBtn = document.querySelectorAll(".main__icon-cross");

TaskInput.focus();

window.onload = () => {
    loadTasks();
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
TaskInput.addEventListener("keypress", function (evento) {
    if (evento.key === "Enter" && TaskInput.value.length === 0) {
        alert("Please write a valid task!");
        evento.preventDefault();
    } else if (evento.key === "Enter" && TaskInput.value.length != 0) {
        evento.preventDefault();
        const task = {
            description: TaskInput.value,
            checked: false,
        };
        createTaskElement(TaskInput.value);
        tasks.push(task);
        updateTasks();
        TaskInput.value = "";
    }
});

function createTaskElement(description) {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add(
        "main__todo-list-item",
        "flex",
        "items-center",
        "justify-between",
        "p-4"
    );
    const newTaskContent = `
            <label class="main__todo-list-item-label mr-auto flex items-center gap-4">
                <input type="checkbox" name="todo-checkbox" id="todo-checkbox" class="main__todo-list-checkbox">
                <p class="main__todo-list-item-description">${description}</p>
            </label>
            <img src="images/icon-cross.svg" alt="" class="main__icon-cross cursor-pointer">
        `;
    newTaskContainer.innerHTML = newTaskContent;
    tasksContainer.insertBefore(newTaskContainer, lastDiv);
}

function updateTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

tasksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("main__icon-cross")) {
        const parentElement = event.target.closest(".main__todo-list-item");
        const taskDescription = parentElement.querySelector(".main__todo-list-item-description").innerText;
        let storageTasks = JSON.parse(localStorage.getItem("tasks"));
        storageTasks = storageTasks.filter(task => task.description !== taskDescription)
        tasks = storageTasks
        localStorage.setItem("tasks", JSON.stringify(tasks));
        parentElement.remove();
    }
});

function loadTasks() {
    const keptTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let i = 0; i < keptTasks.length; i++) {
        createTaskElement(keptTasks[i].description);
    }
}

