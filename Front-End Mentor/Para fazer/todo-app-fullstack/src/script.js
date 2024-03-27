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
const listItem = document.querySelectorAll(".main__todo-list-item");
const deleteTaskBtn = document.querySelectorAll(".main__icon-cross");
const allTasksBtn = document.querySelector(".main__all");
const activeTasksBtn = document.querySelector(".main__active");
const completedTasksBtn = document.querySelector(".main__completed");
const leftAndClearContainer = document.querySelector(
    ".main__todo-left-n-clear"
);
const itemsLeft = document.querySelector(".main__todo-left-number");
const clearCompletedBtn = document.querySelector(".main__todo-clear");

TaskInput.focus();

darkModeCheckbox.addEventListener("change", () => {
    background.classList.toggle("dark-bg");
    TaskInput.classList.toggle("grey-container");
    tasksContainer.classList.toggle("grey-container");
    allActiveCompleted.classList.toggle("grey-container");
    leftAndClearContainer.classList.toggle("grey-container");

    let icon = toggleModeBtn.getAttribute("src");
    if (icon === "images/icon-moon.svg") {
        toggleModeBtn.setAttribute("src", "images/icon-sun.svg");
    } else {
        toggleModeBtn.setAttribute("src", "images/icon-moon.svg");
    }
});

allTasksBtn.classList.add("active-tasks");
allTasksBtn.addEventListener("click", () => {
    allTasksBtn.classList.add("active-tasks");
    activeTasksBtn.classList.remove("active-tasks");
    completedTasksBtn.classList.remove("active-tasks");
});

activeTasksBtn.addEventListener("click", () => {
    activeTasksBtn.classList.add("active-tasks");
    allTasksBtn.classList.remove("active-tasks");
    completedTasksBtn.classList.remove("active-tasks");
});
completedTasksBtn.addEventListener("click", () => {
    completedTasksBtn.classList.add("active-tasks");
    allTasksBtn.classList.remove("active-tasks");
    activeTasksBtn.classList.remove("active-tasks");
});

// ---------------------------------------------------------------------------------------- //

async function getAPI() {
    const api = await fetch("http://localhost:3000/tasks");
    const tasks = await api.json();
    return tasks;
}

function createNewLine(descricao, id, checked) {
    const li = document.createElement("li");
    li.classList.add(
        "main__todo-list-item",
        "flex",
        "items-center",
        "justify-between",
        "p-4"
    );
    li.innerHTML = `
    <label class="main__todo-list-item-label mr-auto flex items-center gap-4">
        <input type="checkbox" name="todo-checkbox" class="main__todo-list-checkbox" ${
            checked ? "checked" : ""
        }>
        <p class="main__todo-list-item-description">${descricao}</p>
    </label>
    <img src="images/icon-cross.svg" alt="" class="main__icon-cross cursor-pointer">
    `;
    li.dataset.id = id;
    return li;
}

async function render() {
    const tasks = await getAPI();
    tasks.forEach((task) => {
        tasksContainer.insertBefore(
            createNewLine(task.descricao, task.id, task.checked), lastDiv);
    });
}

render();

document.addEventListener("click", async (e) => {
    if (e.target.className.includes("main__icon-cross")) {
        const parent = e.target.closest(".main__todo-list-item");
        const id = parent.dataset.id;

        const tasks = await getAPI();
        tasks.forEach(task => {
            if (task.id == id) {
                fetch("http://localhost:3000/tasks/" + id, {
                    method: "DELETE",
                }).then((resposta) => {
                    if (!resposta.ok) {
                        throw new Error("Não foi possível remover o cliente.");
                    }
                });
            }
        });
    }
});





























// async function listTasks() {
//     const taskList = await getAPI()
//     for (const task of taskList) {
//         const li = document.createElement("li");
//         li.classList.add("main__todo-list-item", "flex", "items-center", "justify-between", "p-4");
//         li.innerHTML = `
//         <label class="main__todo-list-item-label mr-auto flex items-center gap-4">
//             <input type="checkbox" name="todo-checkbox" class="main__todo-list-checkbox">
//             <p class="main__todo-list-item-description">${task.descricao}</p>
//         </label>
//         <img src="images/icon-cross.svg" alt="" class="main__icon-cross cursor-pointer">
//         `;
//         // li.dataset.id = id
//         tasksContainer.insertBefore(li, lastDiv);
//     }
// }

// listTasks()
