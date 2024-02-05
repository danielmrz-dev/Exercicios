const checkbox = document.querySelector('#todo-checkbox');
const checkboxLabel = document.querySelector('.main__todo-list-item-description');

checkbox.addEventListener('change', () => {
    checkboxLabel.classList.toggle('line-through');
})

