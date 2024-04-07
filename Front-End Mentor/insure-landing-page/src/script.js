const menuIcon = document.querySelector(".menu-icon")
const checkbox = document.querySelector(".checkbox")

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        menuIcon.setAttribute("src", "../images/icon-close.svg")
    } else {
        menuIcon.setAttribute("src", "../images/icon-hamburger.svg")        
    }
})