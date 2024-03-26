const TaskInput = document.querySelector(".main__input");
const tasksContainer = document.querySelector(".main__todo-list");
const lastDiv = document.querySelector(".main__todo-left-n-clear");
const toggleModeBtn = document.querySelector(".main__mode-icon");
const darkModeCheckbox = document.querySelector("#sun-moon");
const title = document.querySelector(".main__title");
const background = document.querySelector("body");
const allActiveCompleted = document.querySelector(".main__all-active-completed");
const listItem = document.querySelectorAll(".main__todo-list-item");
const deleteTaskBtn = document.querySelectorAll(".main__icon-cross");
const allTasksBtn = document.querySelector(".main__all");
const activeTasksBtn = document.querySelector(".main__active");
const completedTasksBtn = document.querySelector(".main__completed");
const leftAndClearContainer = document.querySelector(".main__todo-left-n-clear");
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
