const header = document.querySelector('header');
const body = document.querySelector('body');
const followersContainers = document.querySelectorAll('.followers__containers');
const thirdFollowersContainer = document.querySelector('.followers__bg');
const overviewContainers = document.querySelectorAll('.overview__containers');
const overviewTitle = document.querySelector('.overview__title');

const darkMode = document.querySelector('.checkbox');

darkMode.addEventListener('change', () => {
    header.classList.toggle('active-bg');
    body.classList.toggle('active-bg');
    overviewTitle.classList.toggle('active-texts');
    thirdFollowersContainer.classList.toggle('active-bg-two');
    
    followersContainers.forEach(element => {
        element.classList.toggle('active-bg-two');
    });

    overviewContainers.forEach(element => {
        element.classList.toggle('active-bg-two');
    });    
})

