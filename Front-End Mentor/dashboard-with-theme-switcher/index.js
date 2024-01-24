const header = document.querySelector('header');
const body = document.querySelector('body');
const followersContainers = document.querySelectorAll('.followers__containers');
const overviewContainers = document.querySelectorAll('.overview__containers');

const darkMode = document.querySelector('.checkbox');


darkMode.addEventListener('change', () => {
    header.classList.toggle('active-bg');
    body.classList.toggle('active-bg');
    
    followersContainers.forEach(element => {
        element.classList.toggle('active-bg-two');
    });

    overviewContainers.forEach(element => {
        element.classList.toggle('active-bg-two');
    });    

})
