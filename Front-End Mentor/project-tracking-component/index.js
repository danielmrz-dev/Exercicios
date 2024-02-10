const checkbox = document.querySelector("#hamburguer-menu");
const menuIcon = document.querySelector(".header__nav-menu-icon");

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        menuIcon.setAttribute('src', 'images/icon-close.svg')
    } else {
        menuIcon.setAttribute('src', 'images/icon-hamburger.svg')
    }
})


