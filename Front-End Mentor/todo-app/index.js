const checkbox = document.querySelector("#todo-checkbox");
const checkboxLabel = document.querySelector(
    ".main__todo-list-item-description"
);
const addTaskBtn = document.querySelector(".main__add-new-task");
const TaskInput = document.querySelector(".main__input");
const tasksContainer = document.querySelector(".main__todo-list");
const lastDiv = document.querySelector(".main__todo-left-n-clear");

const listItem = document.querySelector("main__todo-list-item");
const deleteTask = document.querySelector(".main__icon-cross");

TaskInput.focus();

checkbox.addEventListener("change", () => {
    checkboxLabel.classList.toggle("line-through");
});

addTaskBtn.addEventListener("click", () => {
    if (TaskInput.value.length == 0) {
        alert("Please write a valid task!");
    } else {
        const tasks = [];
        const task = {
            description: TaskInput.value,
        };
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addTaskElement();
        TaskInput.focus();
    }
});

function addTaskElement() {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("main__todo-list-item", "new-container");

    const newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskCheckbox.classList.add("main__todo-list-checkbox");

    const newTaskDescription = document.createElement("label");
    newTaskDescription.classList.add(
        "main__todo-list-item-description",
        "new-description"
    );
    newTaskDescription.innerHTML = TaskInput.value;

    const newTaskCrossBtn = document.createElement("img");
    newTaskCrossBtn.classList.add("main__icon-cross", "cursor-pointer");
    newTaskCrossBtn.setAttribute("src", "images/icon-cross.svg");

    lastDiv.parentNode.insertBefore(newTaskContainer, lastDiv);
    newTaskContainer.append(newTaskCheckbox);
    newTaskContainer.append(newTaskDescription);
    newTaskContainer.append(newTaskCrossBtn);
    TaskInput.value = "";
}
