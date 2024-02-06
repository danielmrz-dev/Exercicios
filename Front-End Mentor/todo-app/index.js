const checkbox = document.querySelector("#todo-checkbox");
const checkboxLabel = document.querySelector(".main__todo-list-item-label");
const addTaskBtn = document.querySelector(".main__add-new-task");
const TaskInput = document.querySelector(".main__input");
const tasksContainer = document.querySelector(".main__todo-list");
const lastDiv = document.querySelector(".main__todo-left-n-clear");

const listItem = document.querySelector(".main__todo-list-item");
const deleteTaskBtn = document.querySelector(".main__icon-cross");

let tasks = JSON.parse(localStorage.getItem('tarefas')) || [];

TaskInput.focus();

function updateTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            addTaskElement(task);
        });
    }
}

window.addEventListener("load", () => {
    loadTasks();
});

addTaskBtn.addEventListener("click", () => {
    if (TaskInput.value.length == 0) {
        alert("Please write a valid task!");
        TaskInput.focus();
    } else {
        const task = {
            description: TaskInput.value,
        };
        tasks.push(task);
        addTaskElement(task)
        updateTasks();
        TaskInput.innerHTML = '';
        TaskInput.focus();
    }
});

tasks.forEach(task => {
    const taskElement = addTaskElement(task)    
    newTaskLabel.append(taskElement);
    updateTasks();
    TaskInput.focus();
});

function addTaskElement(task) {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("main__todo-list-item", "new-container");

    const newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskCheckbox.classList.add("main__todo-list-checkbox", "-order-1");

    const newTaskLabel = document.createElement("label");
    newTaskLabel.classList.add("main__todo-list-item-label", "new-label");

    const newTaskDescription = document.createElement("p");
    newTaskDescription.classList.add(
        "new-description",
        "main__todo-list-item-description"
    );
    newTaskDescription.textContent = task.description;

    const newTaskCrossBtn = document.createElement("img");
    newTaskCrossBtn.classList.add("main__icon-cross", "cursor-pointer");
    newTaskCrossBtn.setAttribute("src", "images/icon-cross.svg");

    lastDiv.parentNode.insertBefore(newTaskContainer, lastDiv);

    newTaskLabel.append(newTaskCheckbox);
    newTaskLabel.append(newTaskDescription);
    newTaskContainer.append(newTaskLabel);
    newTaskContainer.append(newTaskCrossBtn);

    TaskInput.value = "";
    TaskInput.focus();
    return newTaskLabel;
}

const toggleModeBtn = document.querySelector('.main__mode-icon');
const darkModeCheckbox = document.querySelector('#sun-moon');
const title = document.querySelector('.main__title');
const background = document.querySelector('body');

darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        toggleModeBtn.setAttribute('src', 'images/icon-sun.svg')
        background.classList.add('dark-bg');
        TaskInput.classList.add('grey-container')
        lastDiv.classList.add('grey-container')
    } else {
        toggleModeBtn.setAttribute('src', 'images/icon-moon.svg')
        background.classList.remove('dark-bg');
        TaskInput.classList.remove('grey-container')
        lastDiv.classList.remove('grey-container')
    }    
})


