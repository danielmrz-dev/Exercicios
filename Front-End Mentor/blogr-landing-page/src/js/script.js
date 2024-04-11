const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".title-icon");
const menuLinks = document.querySelectorAll(".navbar-links");
const checkbox = document.querySelector("#menu");
const menuIcon = document.querySelector(".menu-icon");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        menuIcon.setAttribute("src", "images/icon-close.svg");
    } else {
        menuIcon.setAttribute("src", "images/icon-hamburger.svg");
    }
});

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", () => {        
        menuLinks[i].classList.toggle("opened")
        menuItems[i].querySelector('img').classList.toggle("spin")
    })
}
